import { Sun, House } from "@phosphor-icons/react";

import { SolarProjectType, StepId, StepType } from "@/constants/form";

import type { InitialStep } from "@/types/form";

export const initialSolarStep: InitialStep = {
  id: StepId.INITIAL,

  type: StepType.INITIAL,

  question: "Avez-vous déjà des panneaux solaires installés ?",

  helper: "Installation solaire existante ?",

  choices: [
    {
      id: SolarProjectType.EXISTING_INSTALLATION,

      label: "Oui, j'ai des panneaux",

      description: "Installation solaire existante",

      icon: Sun,
    },

    {
      id: SolarProjectType.NEW_INSTALLATION,

      label: "Non, pas encore",

      description: "Pas d'installation solaire",

      icon: House,
    },
  ],
};
