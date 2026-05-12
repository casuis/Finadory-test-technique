import {
  Buildings,
  DotsThreeCircle,
  House,
} from "@phosphor-icons/react";

import {
  HousingType,
  StepId,
  StepType,
} from "@/constants/form";

import type { ChoiceStep } from "@/types/form";

export const housingStep: ChoiceStep = {
  id: StepId.HOUSING,

  type: StepType.CHOICES,

  helper: "Type de logement",

  question: "Votre logement :",

  choices: [
    {
      id: HousingType.HOUSE,
      label: "Maison individuelle",
      icon: House,
    },

    {
      id: HousingType.APARTMENT,
      label: "Appartement / immeuble",
      icon: Buildings,
    },

    {
      id: HousingType.OTHER,
      label: "Autre",
      icon: DotsThreeCircle,
    },
  ],
};