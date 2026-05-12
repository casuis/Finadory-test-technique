import { useState } from "react";

import { Card, CardContent } from "@/components/ui";

import {
  SolarProjectType,
  type SolarProjectType as SolarProjectTypeValue,
} from "@/constants/form";

import { initialSolarStep } from "@/data/form";

import {
  ChoiceCard,
  FormHeader,
  FormProgressHeader,
  NavigationButtons,
} from "@/components/form/shared";

/**
 * Première étape globale du formulaire.
 *
 * Elle détermine quel parcours afficher ensuite :
 * - installation solaire existante
 * - nouveau projet solaire
 */
type InitialSolarStepProps = {
  existingTotalSteps: number;
  newTotalSteps: number;

  onSelect: (value: SolarProjectTypeValue) => void;
};

export function InitialSolarStep({
  existingTotalSteps,
  newTotalSteps,
  onSelect,
}: InitialSolarStepProps) {
  /**
   * État local temporaire.
   *
   * Le choix n'est envoyé au parent qu'après clic sur "Continuer".
   */
  const [selectedProjectType, setSelectedProjectType] =
    useState<SolarProjectTypeValue | null>(null);

  const totalSteps =
    selectedProjectType === SolarProjectType.NEW_INSTALLATION
      ? newTotalSteps
      : existingTotalSteps;

  function handleNext() {
    if (!selectedProjectType) return;

    onSelect(selectedProjectType);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <FormHeader />

        <Card className="w-full max-w-4xl rounded-xl border border-slate-200 shadow-xl">
          <FormProgressHeader
            currentStep={0}
            totalSteps={totalSteps}
            progressValue={Math.round((1 / totalSteps) * 100)}
            helper={initialSolarStep.helper}
            question={initialSolarStep.question}
          />

          <CardContent className="space-y-8 p-10 pt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {initialSolarStep.choices.map((choice) => (
                <ChoiceCard
                  key={choice.id}
                  label={choice.label}
                  description={choice.description}
                  icon={choice.icon!}
                  selected={selectedProjectType === choice.id}
                  forceFillIcon={
                    choice.id === SolarProjectType.EXISTING_INSTALLATION
                  }
                  onClick={() =>
                    setSelectedProjectType(choice.id as SolarProjectTypeValue)
                  }
                />
              ))}
            </div>

            <NavigationButtons
              showPrevious={false}
              onPrevious={() => {}}
              onNext={handleNext}
              nextDisabled={!selectedProjectType}
              nextLabel="Continuer"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
