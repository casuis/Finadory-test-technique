import { useMemo } from "react";

import { Info } from "@phosphor-icons/react";

import { Alert, AlertDescription, Slider } from "@/components/ui";

import { SolarPowerRange } from "@/constants/form";

import { solarPowerChoices } from "@/data/form";

/**
 * Slider puissance installation solaire.
 *
 * Utilisé uniquement pour les utilisateurs
 * possédant déjà une installation solaire.
 */

type SolarPowerSliderProps = {
  /**
   * Valeur actuellement sélectionnée.
   */
  value?: string;

  /**
   * Mise à jour valeur.
   */
  onChange: (value: string) => void;
};

const sliderValues = [
  SolarPowerRange.LESS_THAN_3,

  SolarPowerRange.BETWEEN_3_AND_6,

  SolarPowerRange.BETWEEN_6_AND_9,

  SolarPowerRange.MORE_THAN_9,
];

export function SolarPowerSlider({ value, onChange }: SolarPowerSliderProps) {
  /**
   * Index slider actuel.
   */
  const sliderIndex = useMemo(() => {
    const index = sliderValues.indexOf(value as (typeof sliderValues)[number]);

    return index >= 0 ? index : 1;
  }, [value]);

  /**
   * Gestion changement slider.
   */
  function handleSliderChange(values: number[]) {
    const selectedIndex = values[0];

    onChange(sliderValues[selectedIndex]);
  }

  const selectedChoice = solarPowerChoices[sliderIndex];

  const isUnknown = value === SolarPowerRange.UNKNOWN;
  const selectedLabel = isUnknown
    ? "Déplacez le curseur pour sélectionner"
    : selectedChoice?.label;

  return (
    <div className="space-y-8">
      {/**
       * Valeur texte dynamique.
       */}
      <div className="space-y-2">
        <p
          className="
            text-base
            font-semibold
            text-brand-blue
          "
        >
          {selectedLabel}
        </p>
      </div>

      {/**
       * Slider principal.
       */}
      <div className="space-y-5">
        <Slider
          value={[sliderIndex]}
          min={0}
          max={3}
          step={1}
          onValueChange={handleSliderChange}
          className="
              cursor-pointer

              [&_[data-slot=slider-track]]:h-1.5
              [&_[data-slot=slider-track]]:rounded-full
              [&_[data-slot=slider-track]]:bg-slate-200

              [&_[data-slot=slider-range]]:rounded-full
              [&_[data-slot=slider-range]]:border
              [&_[data-slot=slider-range]]:border-black
              [&_[data-slot=slider-range]]:bg-brand-orange
              [&_[data-slot=slider-range]]:transition-[width]
              [&_[data-slot=slider-range]]:duration-300
              [&_[data-slot=slider-range]]:ease-out

              [&_[data-slot=slider-thumb]]:h-6
              [&_[data-slot=slider-thumb]]:w-6
              [&_[data-slot=slider-thumb]]:border-0
              [&_[data-slot=slider-thumb]]:bg-brand-orange
              [&_[data-slot=slider-thumb]]:shadow-lg
              [&_[data-slot=slider-thumb]]:transition-transform
              [&_[data-slot=slider-thumb]]:duration-300
              [&_[data-slot=slider-thumb]]:ease-out
            "
        />

        <div
          className="
              flex
              items-center
              justify-between
              gap-4
            "
        >
          {solarPowerChoices.map((choice) => (
            <button
              key={choice.value}
              type="button"
              onClick={() => onChange(choice.value)}
              className="
                  cursor-pointer
                  text-sm
                  font-medium
                  text-slate-500
                  transition-all
                "
            >
              {choice.value}
            </button>
          ))}
        </div>
      </div>

      {/**
       * Bouton "Je ne sais pas".
       */}
      <button
        type="button"
        onClick={() => onChange(SolarPowerRange.UNKNOWN)}
        className={`
          w-full
          cursor-pointer
          rounded-lg
          border
          px-4
          py-3
          text-sm
          font-medium
          transition-all

          ${
            isUnknown
              ? `
                border-brand-blue
                bg-brand-blue
                text-white
              `
              : `
                border-slate-200
                bg-white
                text-brand-blue
                hover:border-brand-orange
                hover:bg-brand-orange
                hover:text-white
              `
          }
        `}
      >
        Je ne sais pas
      </button>

      {/**
       * Alerte assistance téléphonique.
       */}
      {isUnknown && (
        <Alert
          className="
            border-blue-200
            bg-blue-50
          "
        >
          <Info
            weight="regular"
            className="
              size-5
            "
          />

          <AlertDescription
            className="
              text-sm
              leading-relaxed
              text-slate-700
            "
          >
            Pas de problème, nous vous aiderons à déterminer la puissance
            adaptée lors de notre échange téléphonique.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
