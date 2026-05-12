import type { Dispatch, SetStateAction } from "react";

import {
  Alert,
  AlertDescription,
  Card,
  CardContent,
  Input,
  Separator,
} from "@/components/ui";

import { HousingType, StepId, StepType } from "@/constants/form";

import type { FormStep } from "@/types/form";

import {
  ChoiceCard,
  CompactChoiceCard,
  ContactFormStep,
  FormHeader,
  FormProgressHeader,
  GoalsStep,
  MultiCheckboxCard,
  NavigationButtons,
  SolarPowerSlider,
  SolarProjectAlert,
  type ContactFormValues,
} from "@/components/form/shared";

type FormState = {
  answers: Record<string, string | string[]>;
  contactForm: ContactFormValues;
  isContactFormValid: boolean;
};

type StepRendererProps<TFormState extends FormState> = {
  step: FormStep;
  currentStep: number;
  totalSteps: number;
  progressValue: number;
  formState: TFormState;
  setFormState: Dispatch<SetStateAction<TFormState>>;
  onNext: () => void;
  onPrevious: () => void;
};

export function StepRenderer<TFormState extends FormState>({
  step,
  currentStep,
  totalSteps,
  progressValue,
  formState,
  setFormState,
  onNext,
  onPrevious,
}: StepRendererProps<TFormState>) {
  function setAnswer(stepId: string, value: string | string[]) {
    setFormState((previous) => ({
      ...previous,

      answers: {
        ...previous.answers,

        [stepId]: value,
      },
    }));
  }

  function toggleMultiAnswer(stepId: string, value: string) {
    setFormState((previous) => {
      const currentValues =
        (previous.answers[stepId] as string[]) ?? [];

      const alreadySelected =
        currentValues.includes(value);

      return {
        ...previous,

        answers: {
          ...previous.answers,

          [stepId]: alreadySelected
            ? currentValues.filter(
                (currentValue) =>
                  currentValue !== value
              )
            : [...currentValues, value],
        },
      };
    });
  }

  function toggleGoalAnswer(value: string) {
    setFormState((previous) => {
      const currentGoals =
        (previous.answers[
          StepId.GOALS
        ] as string[]) ?? [];

      const alreadySelected =
        currentGoals.includes(value);

      if (alreadySelected) {
        return {
          ...previous,

          answers: {
            ...previous.answers,

            [StepId.GOALS]:
              currentGoals.filter(
                (currentValue) =>
                  currentValue !== value
              ),
          },
        };
      }

      if (currentGoals.length >= 2) {
        return previous;
      }

      return {
        ...previous,

        answers: {
          ...previous.answers,

          [StepId.GOALS]: [
            ...currentGoals,
            value,
          ],
        },
      };
    });
  }

  function setEquipmentTiming(value: string) {
    setAnswer(
      StepId.EQUIPMENT_TIMING,
      value
    );
  }

  function setContactForm(
    value: ContactFormValues,
    isValid: boolean
  ) {
    setFormState((previous) => ({
      ...previous,

      contactForm: value,

      isContactFormValid: isValid,
    }));
  }

  const housingValue =
    formState.answers[
      StepId.HOUSING
    ] as string;

  const goals =
    (formState.answers[
      StepId.GOALS
    ] as string[]) ?? [];

  const equipmentTiming =
    (formState.answers[
      StepId.EQUIPMENT_TIMING
    ] as string) ?? "";

  const choiceValue =
    formState.answers[
      step.id
    ] as string | undefined;

  const nextDisabled =
    (step.id === StepId.HOUSING &&
      (!housingValue ||
        (housingValue ===
          HousingType.OTHER &&
          !formState.answers[
            `${step.id}-other`
          ]?.toString()
            .trim()))) ||
    (step.type ===
      StepType.CHOICES &&
      step.id !==
        StepId.HOUSING &&
      !choiceValue?.trim()) ||
    (step.type ===
      StepType.MULTI_CHOICES &&
      (
        (formState.answers[
          step.id
        ] as string[]) ?? []
      ).length === 0) ||
    (step.type ===
      StepType.GOALS &&
      (goals.length === 0 ||
        equipmentTiming ===
          "")) ||
    (step.type ===
      StepType.CONTACT &&
      !formState.isContactFormValid);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <FormHeader />

        <Card className="w-full max-w-4xl rounded-xl border border-slate-200 shadow-xl">
          <FormProgressHeader
            currentStep={ currentStep }
            totalSteps={ totalSteps }
            progressValue={ progressValue }
            helper={ step.helper }
            question={ step.question }
            subtitle={ step.subtitle }
          />

          <CardContent className="space-y-10 p-10 pt-4">
            {step.type ===
              StepType.ALERT && (
              <SolarProjectAlert />
            )}

            {step.type ===
              StepType.CHOICES &&
              step.id ===
                StepId.HOUSING && (
                <div className="space-y-5">
                  <div className="flex flex-col gap-4">
                    {step.choices.map(
                      (choice) => (
                        <CompactChoiceCard
                          key={ choice.id }
                          label={ choice.label }
                          icon={ choice.icon! }
                          selected={ housingValue === choice.id }
                          onClick={() =>
                            setAnswer(
                              step.id,
                              choice.id
                            )
                          }
                        />
                      )
                    )}
                  </div>

                  {housingValue ===
                    HousingType.HOUSE && (
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertDescription className="text-sm font-medium text-brand-blue">
                        Parfait,
                        vous êtes
                        éligible !
                      </AlertDescription>
                    </Alert>
                  )}

                  {housingValue ===
                    HousingType.APARTMENT && (
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertDescription className="text-sm font-medium text-brand-blue">
                        Nous
                        étudierons
                        la faisabilité
                        (toiture
                        collective,
                        balcon...)
                      </AlertDescription>
                    </Alert>
                  )}

                  {housingValue ===
                    HousingType.OTHER && (
                    <Input
                      value={
                        formState
                          .answers[
                          `${step.id}-other`
                        ] ??
                        ""
                      }
                      placeholder="Précisez le type de logement : local commercial, bureau, etc."
                      onChange={(
                        event
                      ) =>
                        setAnswer(
                          `${step.id}-other`,
                          event
                            .target
                            .value
                        )
                      }
                      className="h-12 rounded-lg"
                    />
                  )}
                </div>
              )}

            {step.type ===
              StepType.CHOICES &&
              step.id !==
                StepId.HOUSING && (
                <div className="flex flex-col gap-4">
                  {step.choices.map(
                    (choice) => (
                      <ChoiceCard
                        key={
                          choice.id
                        }
                        label={
                          choice.label
                        }
                        description={
                          choice.description
                        }
                        icon={
                          choice.icon
                        }
                        secondIcon={
                          choice.secondIcon
                        }
                        selected={
                          formState
                            .answers[
                            step.id
                          ] ===
                          choice.id
                        }
                        iconSize={
                          step.id ===
                          StepId.NEW_PROJECT_INTEREST
                            ? 36
                            : 64
                        }
                        onClick={() =>
                          setAnswer(
                            step.id,
                            choice.id
                          )
                        }
                      />
                    )
                  )}
                </div>
              )}

            {step.type ===
              StepType.MULTI_CHOICES && (
              <div className="flex flex-col gap-4">
                {step.choices.map(
                  (choice) => (
                    <MultiCheckboxCard
                      key={
                        choice.id
                      }
                      label={
                        choice.label
                      }
                      checked={(
                        (formState
                          .answers[
                          step.id
                        ] as string[]) ??
                        []
                      ).includes(
                        choice.id
                      )}
                      onCheckedChange={() =>
                        toggleMultiAnswer(
                          step.id,
                          choice.id
                        )
                      }
                    />
                  )
                )}
              </div>
            )}

            {step.type ===
              StepType.GOALS && (
              <GoalsStep
                goalAnswers={
                  goals
                }
                equipmentTiming={
                  equipmentTiming
                }
                onGoalSelect={
                  toggleGoalAnswer
                }
                onEquipmentTimingSelect={
                  setEquipmentTiming
                }
              />
            )}

            {step.type ===
              StepType.SLIDER && (
              <SolarPowerSlider
                value={
                  formState
                    .answers[
                    step.id
                  ] as string
                }
                onChange={(
                  value
                ) =>
                  setAnswer(
                    step.id,
                    value
                  )
                }
              />
            )}

            {step.type ===
              StepType.CONTACT && (
              <ContactFormStep
                values={
                  formState.contactForm
                }
                onChange={
                  setContactForm
                }
              />
            )}

            <Separator className="bg-slate-200" />

            <NavigationButtons
              showPrevious
              onPrevious={
                onPrevious
              }
              onNext={onNext}
              nextDisabled={
                nextDisabled
              }
              nextLabel={
                step.type ===
                StepType.CONTACT
                  ? "Recevoir mon étude batterie gratuite"
                  : "Continuer"
              }
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
