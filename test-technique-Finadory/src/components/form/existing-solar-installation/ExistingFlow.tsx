import { useEffect, useMemo, useState } from "react";
import { existingSolarInstallationSteps } from "@/data/form";
import { SolarProjectType } from "@/constants/form";
import type { FormStep } from "@/types/form";
import type { ContactFormValues } from "@/components/form/shared";
import { StepRenderer } from "@/components/form/StepRender";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


type ExistingFlowProps = {
  onBack: () => void;
};

type ExistingFormState = {
  solarProjectType: typeof SolarProjectType.EXISTING_INSTALLATION;
  answers: Record<string, string>;
  equipmentTiming: string;
  contactForm: ContactFormValues;
  isContactFormValid: boolean;
};

const initialContactForm: ContactFormValues = {
  firstName: "",
  lastName: "",
  city: "",
  postalCode: "",
  phone: "",
  email: "",
  privacyAccepted: false,
  marketingAccepted: false,
};

const initialFormState: ExistingFormState = {
  solarProjectType: SolarProjectType.EXISTING_INSTALLATION,
  answers: {},
  equipmentTiming: "",
  contactForm: initialContactForm,
  isContactFormValid: false,
};

const STORAGE_KEY = "finadory-form-existing-installation";

type StoredExistingFlow = {
  currentStep: number;
  formState: ExistingFormState;
};

function getStoredFlowState(): StoredExistingFlow {
  const storedFlow = localStorage.getItem(STORAGE_KEY);

  if (!storedFlow) {
    return {
      currentStep: 0,
      formState: initialFormState,
    };
  }

  try {
    const parsedFlow = JSON.parse(storedFlow) as Partial<StoredExistingFlow>;

    return {
      currentStep:
        typeof parsedFlow.currentStep === "number"
          ? parsedFlow.currentStep
          : 0,
      formState: {
        ...initialFormState,
        ...parsedFlow.formState,
        contactForm: {
          ...initialContactForm,
          ...parsedFlow.formState?.contactForm,
        },
      },
    };
  } catch {
    return {
      currentStep: 0,
      formState: initialFormState,
    };
  }
}

export function ExistingFlow({ onBack }: ExistingFlowProps) {
  const [storedFlowState] = useState(getStoredFlowState);
  const [currentStep, setCurrentStep] = useState(storedFlowState.currentStep);
  const [formState, setFormState] = useState<ExistingFormState>(
    storedFlowState.formState
  );
  const [isResultOpen, setIsResultOpen] = useState(false);

  const steps = useMemo<FormStep[]>(() => existingSolarInstallationSteps, []);
  const safeCurrentStep = Math.min(currentStep, steps.length - 1);
  const step = steps[safeCurrentStep];
  const totalSteps = steps.length + 1;
  const displayCurrentStep = safeCurrentStep + 1;

  const progressValue = Math.round(
    ((displayCurrentStep + 1) / totalSteps) * 100
  );

  useEffect(() => {
    if (currentStep !== safeCurrentStep) {
      setCurrentStep(safeCurrentStep);
      return;
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentStep,
        formState,
      })
    );
  }, [currentStep, formState, safeCurrentStep]);

  function handleNext() {
    if (safeCurrentStep < steps.length - 1) {
      setCurrentStep((previousStep) => previousStep + 1);
      return;
    }
    setIsResultOpen(true);
  }

  function handlePrevious() {
    if (safeCurrentStep === 0) {
      onBack();
      return;
    }

    setCurrentStep((previousStep) => previousStep - 1);
  }

  return (
    <>
      <StepRenderer
        step={step}
        currentStep={displayCurrentStep}
        totalSteps={totalSteps}
        progressValue={progressValue}
        formState={formState}
        setFormState={setFormState}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />

      <AlertDialog open={isResultOpen} onOpenChange={setIsResultOpen}>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>JSON final</AlertDialogTitle>

            <AlertDialogDescription>
              Voici les données finales du formulaire.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <pre className="max-h-[500px] overflow-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-50">
            {JSON.stringify(formState, null, 2)}
          </pre>

          <AlertDialogFooter>
            <AlertDialogAction>Fermer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
