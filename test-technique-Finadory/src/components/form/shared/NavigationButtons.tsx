import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Navigation partagée entre étapes.
 *
 * Gère :
 * - bouton retour
 * - bouton continuer
 * - états disabled
 * - label dynamique
 */
type NavigationButtonsProps = {
  /**
   * Affiche le bouton retour.
   */
  showPrevious: boolean;

  /**
   * Navigation étape précédente.
   */
  onPrevious: () => void;

  /**
   * Navigation étape suivante.
   */
  onNext: () => void;

  /**
   * Désactive le bouton suivant.
   */
  nextDisabled?: boolean;

  /**
   * Label bouton suivant.
   */
  nextLabel?: string;
};

export function NavigationButtons({
  showPrevious,
  onPrevious,
  onNext,
  nextDisabled = false,
  nextLabel = "Continuer",
}: NavigationButtonsProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        showPrevious ? "grid-cols-[1fr_2fr]" : "grid-cols-1"
      )}
    >
      {showPrevious && (
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          className="
            h-14
            cursor-pointer
            rounded-lg
            border-2
            border-brand-blue
            bg-white
            text-lg
            font-semibold
            text-brand-blue
            hover:bg-brand-blue
            hover:text-white
          "
        >
          <ArrowLeft weight="bold" className="mr-2 size-5" />
          <span>Retour</span>
        </Button>
      )}

      <Button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="
          h-14
          cursor-pointer
          rounded-lg
          bg-brand-blue
          text-lg
          font-semibold
          text-white
          hover:bg-brand-blue
          disabled:cursor-not-allowed
          disabled:bg-slate-300
          disabled:text-slate-500
        "
      >
        <span>{nextLabel}</span>
        <ArrowRight weight="bold" className="ml-2 size-5" />
      </Button>
    </div>
  );
}
