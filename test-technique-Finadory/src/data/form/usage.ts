import { CheckCircle } from "@phosphor-icons/react";

import { StepId, StepType, UsageType } from "@/constants/form";

import type { MultiChoiceStep } from "@/types/form";

export const usageStep: MultiChoiceStep = {
  id: StepId.USAGE,

  type: StepType.MULTI_CHOICES,

  question: "Cochez tout ce qui s'applique à votre situation",

  helper: "Habitudes de consommation",

  subtitle:
    "Ces informations nous aident à dimensionner votre batterie (optionnel mais recommandé)",

  choices: [
    {
      id: UsageType.ELECTRIC_HEATING,

      label: "Je chauffe principalement à l'électricité",

      icon: CheckCircle,
    },

    {
      id: UsageType.ELECTRIC_CAR,

      label:
        "Je possède un véhicule électrique (ou je prévois d'en acheter un)",

      icon: CheckCircle,
    },

    {
      id: UsageType.HEATED_POOL,

      label: "J'ai une piscine chauffée",

      icon: CheckCircle,
    },

    {
      id: UsageType.REMOTE_WORK,

      label: "Je travaille à domicile",

      icon: CheckCircle,
    },
  ],
};
