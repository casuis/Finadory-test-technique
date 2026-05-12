import { Check } from "@phosphor-icons/react";

import { Checkbox } from "@/components/ui";

/**
 * Card checkbox réutilisable.
 *
 * Utilisée pour :
 * - habitudes de consommation
 * - sélections multiples
 * - futurs groupes checkbox
 */

type MultiCheckboxCardProps = {
  /**
   * Texte principal.
   */
  label: string;

  /**
   * État checkbox.
   */
  checked: boolean;

  /**
   * Action changement état.
   */
  onCheckedChange: () => void;
};

export function MultiCheckboxCard({
  label,
  checked,
  onCheckedChange,
}: MultiCheckboxCardProps) {
  return (
    <button
      type="button"
      onClick={onCheckedChange}
      className={`
  flex
  min-h-[88px]
  w-full
  cursor-pointer
  items-center
  gap-5
  rounded-xl
  border-2
  px-6
  py-5
  text-left
  transition-all
  duration-200

  ${
    checked
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
      <div className="pt-0.5">
        <Checkbox
          checked={checked}
          className="
            pointer-events-none
            size-5
            border-2
            border-current
            data-[state=checked]:bg-white
            data-[state=checked]:text-brand-blue
          "
        >
          <Check weight="bold" className="size-4" />
        </Checkbox>
      </div>

      <p className="text-sm font-medium leading-relaxed">{label}</p>
    </button>
  );
}
