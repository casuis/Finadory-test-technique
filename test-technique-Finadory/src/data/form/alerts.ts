import { StepId, StepType } from "@/constants/form";

import type { AlertStep } from "@/types/form";

export const newProjectAlertStep: AlertStep = {
  id: StepId.NEW_PROJECT_ALERT,

  type: StepType.ALERT,

  question: "Excellente nouvelle !",

  helper: "Projet solaire complet",
};
