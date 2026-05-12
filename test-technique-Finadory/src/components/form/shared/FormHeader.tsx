import { Clock, Target, CheckCircle } from "@phosphor-icons/react";
import solarImage from "@/assets/mabatteriesolaire-logo.png";
import { HeaderBadge } from "./HeaderBadge";

const badges = [
  {
    label: "2 minutes",
    icon: Clock,
  },
  {
    label: "Étude personnalisée",
    icon: Target,
  },
  {
    label: "Sans engagement",
    icon: CheckCircle,
    weight: "fill" as const,
  },
];

/**
 * Header principal du formulaire.
 *
 * Affiche :
 * - image/logo principal
 * - titre global
 * - badges avantages
 */

export function FormHeader() {
  return (
    <div className="mb-8 flex w-full max-w-4xl flex-col items-center space-y-6">
      <img
        src={solarImage}
        alt="Installation solaire"
        className="
          w-full
          max-w-[900px]
          rounded-lg
          object-cover
        "
      />

      {/**
       * Titre principal.
       */}
      <div className="space-y-2 text-center">
        <h1
          className="
            text-3xl
            font-bold
            text-brand-blue
          "
        >
          Simulation gratuite – Batterie solaire
        </h1>
      </div>
      <div
        className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-3"
      >
        {badges.map((badge) => (
          <HeaderBadge
            key={badge.label}
            label={badge.label}
            icon={badge.icon}
            weight={badge.weight}
          />
        ))}
      </div>
    </div>
  );
}
