import type { Dispatch, SetStateAction } from "react";

import { Card, CardContent, Separator } from "@/components/ui";

import { StepType } from "@/constants/form";

import type { FormStep } from "@/types/form";

import {
  ChoiceCard,
  ContactFormStep,
  FormHeader,
  FormProgressHeader,
  GoalsStep,
  MultiCheckboxCard,
  NavigationButtons,
  SolarPowerSlider,
  type ContactFormValues,
} from "@/components/form/shared";

type ExistingStepsProps = {
  step: FormStep;
  steps: FormStep[];
  currentStep: number;
  progressValue: number;

  answers: Record<string, string>;
  setAnswers: Dispatch<SetStateAction<Record<string, string>>>;

  multiAnswers: Record<string, string[]>;
  setMultiAnswers: Dispatch<SetStateAction<Record<string, string[]>>>;

  goalAnswers: string[];
  setGoalAnswers: Dispatch<SetStateAction<string[]>>;

  equipmentTiming: string;
  setEquipmentTiming: Dispatch<SetStateAction<string>>;

  contactForm: ContactFormValues;
  setContactForm: Dispatch<SetStateAction<ContactFormValues>>;
  isContactFormValid: boolean;
  setIsContactFormValid: Dispatch<SetStateAction<boolean>>;

  onNext: () => void;
  onPrevious: () => void;
};

export function ExistingSteps({
  step,
  steps,
  currentStep,
  progressValue,
  answers,
  setAnswers,
  multiAnswers,
  setMultiAnswers,
  goalAnswers,
  setGoalAnswers,
  equipmentTiming,
  setEquipmentTiming,
  contactForm,
  setContactForm,
  isContactFormValid,
  setIsContactFormValid,
  onNext,
  onPrevious,
}: ExistingStepsProps) {
  function handleSelect(choiceId: string) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [step.id]: choiceId,
    }));
  }

  function handleMultiSelect(choiceId: string) {
    setMultiAnswers((previousAnswers) => {
      const currentValues = previousAnswers[step.id] ?? [];
      const alreadySelected = currentValues.includes(choiceId);

      return {
        ...previousAnswers,
        [step.id]: alreadySelected
          ? currentValues.filter((value) => value !== choiceId)
          : [...currentValues, choiceId],
      };
    });
  }

  function handleSolarPowerChange(value: string) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [step.id]: value,
    }));
  }

  function handleGoalSelect(choiceId: string) {
    setGoalAnswers((previousAnswers) => {
      const alreadySelected = previousAnswers.includes(choiceId);

      if (alreadySelected) {
        return previousAnswers.filter((value) => value !== choiceId);
      }

      if (previousAnswers.length >= 2) {
        return previousAnswers;
      }

      return [...previousAnswers, choiceId];
    });
  }

  const nextDisabled =
    (step.type === StepType.GOALS &&
      (goalAnswers.length === 0 || equipmentTiming === "")) ||
    (step.type === StepType.CONTACT && !isContactFormValid);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <FormHeader />

        <Card className="w-full max-w-4xl rounded-xl border border-slate-200 shadow-xl">
          <FormProgressHeader
            currentStep={currentStep}
            totalSteps={steps.length}
            progressValue={progressValue}
            helper={step.helper}
            question={step.question}
            subtitle={step.subtitle}
          />

          <CardContent className="space-y-10 p-10 pt-4">
            {step.type === StepType.CHOICES && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {step.choices.map((choice) => (
                  <ChoiceCard
                    key={choice.id}
                    label={choice.label}
                    description={choice.description}
                    icon={choice.icon!}
                    selected={answers[step.id] === choice.id}
                    forceFillIcon={choice.id === "yes"}
                    onClick={() => handleSelect(choice.id)}
                  />
                ))}
              </div>
            )}

            {step.type === StepType.MULTI_CHOICES && (
              <div className="flex flex-col gap-4">
                {step.choices.map((choice) => (
                  <MultiCheckboxCard
                    key={choice.id}
                    label={choice.label}
                    checked={(multiAnswers[step.id] ?? []).includes(choice.id)}
                    onCheckedChange={() => handleMultiSelect(choice.id)}
                  />
                ))}
              </div>
            )}

            {step.type === StepType.GOALS && (
              <GoalsStep
                goalAnswers={goalAnswers}
                equipmentTiming={equipmentTiming}
                onGoalSelect={handleGoalSelect}
                onEquipmentTimingSelect={setEquipmentTiming}
              />
            )}

            {step.type === StepType.SLIDER && (
              <SolarPowerSlider
                value={answers[step.id]}
                onChange={handleSolarPowerChange}
              />
            )}

            {step.type === StepType.CONTACT && (
              <ContactFormStep
                values={contactForm}
                onChange={(values, isValid) => {
                  setContactForm(values);
                  setIsContactFormValid(isValid);
                }}
              />
            )}

            <Separator className="bg-slate-200" />

            <NavigationButtons
              showPrevious
              onPrevious={onPrevious}
              onNext={onNext}
              nextDisabled={nextDisabled}
              nextLabel={
                step.type === StepType.CONTACT
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
