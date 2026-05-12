import { Sun, House, CheckCircle } from "@phosphor-icons/react";

import {
  SolarProjectType,
  StepId,
  StepType,
  GoalType,
  EquipmentTiming,
  UsageType,
  SolarPowerRange,
} from "@/constants/form";

import type {
  InitialStep,
  AlertStep,
  SliderStep,
  MultiChoiceStep,
  GoalsStep,
  ContactStep,
} from "@/types/form";

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

export const newProjectAlertStep: AlertStep = {
  id: StepId.NEW_PROJECT_ALERT,
  type: StepType.ALERT,

  question: "Excellente nouvelle !",

  helper: "Projet solaire complet",
};

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

export const goalsStep: GoalsStep = {
  id: StepId.GOALS,
  type: StepType.GOALS,

  question: "Quel est votre objectif principal ?",

  helper: "Objectifs",

  subtitle: "Sélectionnez jusqu’à 2 objectifs",

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


export const contactStep: ContactStep = {
  id: StepId.CONTACT,
  type: StepType.CONTACT,

  question: "Recevez votre étude batterie gratuite",

  helper: "Vos coordonnées",

  subtitle: "Un conseiller vous recontactera pour finaliser votre simulation",
};

export const existingSolarInstallationSteps = [
  solarPowerStep,
  usageStep,
  goalsStep,
  contactStep,
];

export const newSolarProjectSteps = [
  newProjectAlertStep,
  usageStep,
  goalsStep,
  contactStep,
];
