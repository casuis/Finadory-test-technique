/**
 * Type de projet solaire choisi
 * par l'utilisateur au début du formulaire.
 */

export const SolarProjectType = {
  EXISTING_INSTALLATION: "existing-installation",
  NEW_INSTALLATION: "new-installation",
} as const;

export type SolarProjectType =
  (typeof SolarProjectType)[keyof typeof SolarProjectType];

export const StepType = {
  INITIAL: "initial",
  ALERT: "alert",
  CHOICES: "choices",
  MULTI_CHOICES: "multi-choices",
  GOALS: "goals",
  SLIDER: "slider",
  CONTACT: "contact",
} as const;

export type StepType = (typeof StepType)[keyof typeof StepType];

export const StepId = {
  INITIAL: "initial",
  NEW_PROJECT_ALERT: "new-project-alert",
  SOLAR_POWER: "solar-power",
  USAGE: "usage",
  GOALS: "goals",
  HOUSING: "housing",
  CONTACT: "contact",
  NEW_PROJECT_INTEREST: "new-project-interest",
  EQUIPMENT_TIMING: "equipment-timing",
  NEW_PROJECT_TIMING: "new-project-timing",
} as const;

export type StepId = (typeof StepId)[keyof typeof StepId];


export const GoalType = {
  REDUCE_BILL: "reduce-bill",
  AUTONOMY: "autonomy",
  ENVIRONMENT: "environment",
  SECURE_POWER: "secure-power",
} as const;

export type GoalType = (typeof GoalType)[keyof typeof GoalType];

export const EquipmentTiming = {
  ASAP: "asap",
  THREE_TO_SIX_MONTHS: "3-6-months",
  RESEARCHING: "researching",
} as const;

export type EquipmentTiming =
  (typeof EquipmentTiming)[keyof typeof EquipmentTiming];

export const UsageType = {
  ELECTRIC_HEATING: "electric-heating",
  ELECTRIC_CAR: "electric-car",
  HEATED_POOL: "heated-pool",
  REMOTE_WORK: "remote-work",
} as const;

export type UsageType = (typeof UsageType)[keyof typeof UsageType];

export const SolarPowerRange = {
  LESS_THAN_3: "< 3kWc",
  BETWEEN_3_AND_6: "3-6kWc",
  BETWEEN_6_AND_9: "6-9kWc",
  MORE_THAN_9: "> 9kWc",
  UNKNOWN: "unknown",
} as const;

export type SolarPowerRange =
  (typeof SolarPowerRange)[keyof typeof SolarPowerRange];

  export const NewProjectInterestType = {
  PANELS_AND_BATTERY: "panels-and-battery",
  PANELS_ONLY: "panels-only",
  RESEARCHING: "researching",
} as const;

export type NewProjectInterestType =
  (typeof NewProjectInterestType)[keyof typeof NewProjectInterestType];

export const HousingType = {
  HOUSE: "house",
  APARTMENT: "apartment",
  OTHER: "other",
} as const;

export type HousingType = (typeof HousingType)[keyof typeof HousingType];

export const NewProjectTiming = {
  ASAP: "asap",
  THREE_TO_SIX_MONTHS: "3-6-months",
  LATER: "later",
} as const;

export type NewProjectTiming =
  (typeof NewProjectTiming)[keyof typeof NewProjectTiming];