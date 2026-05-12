import { StepId, StepType } from "@/constants/form";

import type { ContactStep } from "@/types/form";

export const contactStep: ContactStep = {
  id: StepId.CONTACT,

  type: StepType.CONTACT,

  question: "Recevez votre étude batterie gratuite",

  helper: "Vos coordonnées",

  subtitle: "Un conseiller vous recontactera pour finaliser votre simulation",
};
