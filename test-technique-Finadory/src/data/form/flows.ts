import { solarPowerStep } from "./solar-power";
import { usageStep } from "./usage";
import { goalsStep } from "./goals";
import { housingStep } from "./housing";
import { contactStep } from "./contact";
import { newProjectInterestStep } from "./new-project-interest";
import { newProjectAlertStep } from "./alerts";
import { newProjectTimingStep } from "./new-project-timing";


/**
 * Flow utilisateur possédant déjà
 * une installation solaire existante.
 *
 * Ce parcours contient des questions
 * spécifiques à une installation déjà en place.
 */
export const existingSolarInstallationSteps = [
  solarPowerStep,
  usageStep,
  goalsStep,
  contactStep,
];

/**
 * Flow utilisateur n'ayant pas encore
 * d'installation solaire.
 *
 * On affiche d'abord une étape d'information
 * sur l'accompagnement possible.
 */

export const newSolarProjectSteps = [
  newProjectAlertStep,
  newProjectInterestStep,  
  housingStep,
  newProjectTimingStep,
  contactStep,
];
