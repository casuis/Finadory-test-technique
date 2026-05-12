import { CheckCircle } from "@phosphor-icons/react";

import { StepId, StepType, GoalType, EquipmentTiming } from "@/constants/form";

import type { GoalsStep } from "@/types/form";

export const goalsStep: GoalsStep = {
  id: StepId.GOALS,

  type: StepType.GOALS,

  question: "Quel est votre objectif principal ?",

  helper: "Objectifs",

  subtitle: "Sélectionnez jusqu'à 2 motivations principales",

  choices: [
    {
      id: GoalType.REDUCE_BILL,

      label: "Réduire ma facture",

      icon: CheckCircle,
    },

    {
      id: GoalType.AUTONOMY,

      label: "Gagner en autonomie",

      icon: CheckCircle,
    },

    {
      id: GoalType.ENVIRONMENT,

      label: "Impact environnemental",

      icon: CheckCircle,
    },

    {
      id: GoalType.SECURE_POWER,

      label: "Sécuriser mon alimentation",

      icon: CheckCircle,
    },
  ],
};

export const equipmentTimingChoices = [
  {
    id: EquipmentTiming.ASAP,

    label: "Le plus tôt possible",
  },

  {
    id: EquipmentTiming.THREE_TO_SIX_MONTHS,

    label: "D'ici 3 à 6 mois",
  },

  {
    id: EquipmentTiming.RESEARCHING,

    label: "Je me renseigne",
  },
];
