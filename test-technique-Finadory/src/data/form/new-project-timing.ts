import {
  NewProjectTiming,
  StepId,
  StepType,
} from "@/constants/form";

import type { ChoiceStep } from "@/types/form";

export const newProjectTimingStep: ChoiceStep = {
  id: StepId.NEW_PROJECT_TIMING,

  type: StepType.CHOICES,

  helper: "Timing du projet",

  question:
    "Quand souhaitez-vous lancer votre projet ?",

  choices: [
    {
      id: NewProjectTiming.ASAP,
      label: "Dès que possible",
    },

    {
      id: NewProjectTiming.THREE_TO_SIX_MONTHS,
      label: "3 à 6 mois",
    },

    {
      id: NewProjectTiming.LATER,
      label: "Plus tard",
    },
  ],
};
