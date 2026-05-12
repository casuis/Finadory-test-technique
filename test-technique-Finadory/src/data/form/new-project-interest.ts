import { Sun, BatteryChargingVertical, Info } from "@phosphor-icons/react";

import {
  StepId,
  StepType,
  NewProjectInterestType,
} from "@/constants/form";

import type { ChoiceStep } from "@/types/form";

export const newProjectInterestStep: ChoiceStep = {
  id: StepId.NEW_PROJECT_INTEREST,
  type: StepType.CHOICES,

  question: "Quel projet vous intéresse aujourd'hui ?",

  helper: "Type de projet souhaité",

  choices: [
    {
      id: NewProjectInterestType.PANELS_AND_BATTERY,
      label: "Panneaux + batterie",
      description: "Produire votre énergie et la stocker",
      icon: Sun,
      secondIcon: BatteryChargingVertical,
    },
    {
      id: NewProjectInterestType.PANELS_ONLY,
      label: "Panneaux solaires seul",
      description: "Produire votre propre électricité",
      icon: Sun,
    },
    {
      id: NewProjectInterestType.RESEARCHING,
      label: "Je me renseigne",
      description: "Comparer les solutions possibles",
      icon: Info,
    },
  ],
};