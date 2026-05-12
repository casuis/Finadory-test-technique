import { StepId, StepType, SolarPowerRange } from "@/constants/form";

import type { SliderStep } from "@/types/form";

export const solarPowerStep: SliderStep = {
  id: StepId.SOLAR_POWER,

  type: StepType.SLIDER,

  question: "Quelle est la puissance de votre installation solaire ?",

  helper: "Puissance installée",

  subtitle:
    "Généralement indiqué sur votre facture EDF OA ou votre contrat d’installation",
};

export const solarPowerChoices = [
  {
    value: SolarPowerRange.LESS_THAN_3,

    label: "Moins de 3 kWc",
  },

  {
    value: SolarPowerRange.BETWEEN_3_AND_6,

    label: "3 à 6 kWc • Standard",
  },

  {
    value: SolarPowerRange.BETWEEN_6_AND_9,

    label: "6 à 9 kWc • Optimal",
  },

  {
    value: SolarPowerRange.MORE_THAN_9,

    label: "Plus de 9 kWc • Excellent",
  },
];
