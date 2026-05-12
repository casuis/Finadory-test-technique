import type { Icon } from "@phosphor-icons/react";

import type { StepId, StepType } from "@/constants/form";

/**
 * Step générique du formulaire.
 *
 * Toutes les étapes héritent de cette structure.
 */

export type Choice = {
  id: string;
  label: string;
  description?: string;
  icon?: Icon;
  secondIcon?: Icon;
};

export type BaseStep = {
  id: StepId;
  question: string;
  helper: string;
  subtitle?: string;
};

export type InitialStep = BaseStep & {
  type: typeof StepType.INITIAL;
  choices: Choice[];
};

export type AlertStep = BaseStep & {
  type: typeof StepType.ALERT;
};

export type ChoiceStep = BaseStep & {
  type: typeof StepType.CHOICES;
  choices: Choice[];
};

export type MultiChoiceStep = BaseStep & {
  type: typeof StepType.MULTI_CHOICES;
  choices: Choice[];
};

export type GoalsStep = BaseStep & {
  type: typeof StepType.GOALS;
  choices: Choice[];
};

export type SliderStep = BaseStep & {
  type: typeof StepType.SLIDER;
};

export type ContactStep = BaseStep & {
  type: typeof StepType.CONTACT;
};

export type FormStep =
  | InitialStep
  | AlertStep
  | ChoiceStep
  | MultiChoiceStep
  | GoalsStep
  | SliderStep
  | ContactStep;
