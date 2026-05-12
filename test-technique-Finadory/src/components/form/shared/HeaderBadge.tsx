import type { Icon, IconWeight } from "@phosphor-icons/react";

/**
 * Badge affiché dans le header principal.
 *
 * Utilisé pour :
 * - 2 minutes
 * - étude personnalisée
 * - sans engagement
 */

type HeaderBadgeProps = {
  /**
   * Texte badge.
   */
  label: string;

  /**
   * Icône affichée.
   */
  icon: Icon;

  /**
   * Weight phosphor icon.
   */
  weight?: IconWeight;
};

export function HeaderBadge({
  label,
  icon: Icon,
  weight = "bold",
}: HeaderBadgeProps) {
  return (
    <div
      className="
        flex
        w-fit
        items-center
        justify-center
        gap-3.5
        rounded-lg
        border-2
        border-brand-blue
        bg-white
        px-3.5
        py-2.5
        shadow-md
      "
    >
      <Icon
        weight={weight}
        className="
          size-6
          text-brand-blue
        "
      />

      <span
        className="
          text-[16px]
          font-semibold
          text-brand-blue
        "
      >
        {label}
      </span>
    </div>
  );
}
