import type { Icon } from "@phosphor-icons/react";

import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

type ChoiceCardProps = {
  label: string;
  description?: string;
  icon?: Icon;
  secondIcon?: Icon;
  selected: boolean;
  forceFillIcon?: boolean;
  iconSize?: number;
  onClick: () => void;
};

export function ChoiceCard({
  label,
  description,
  icon: Icon,
  secondIcon: SecondIcon,
  selected,
  iconSize = 64,
  onClick,
}: ChoiceCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        `
          group flex
          cursor-pointer
          items-center justify-center
          rounded-lg border-2 p-6 text-center
          transition-all duration-200
        `,
        Icon ? "min-h-[220px]" : "min-h-[96px]",
        selected
          ? "border-brand-blue bg-brand-blue text-white"
          : `
            border-slate-200 bg-white text-brand-blue
            hover:border-brand-orange hover:bg-brand-orange hover:text-white
          `
      )}
    >
      <div className="flex flex-col items-center justify-center">
        {Icon || SecondIcon ? (
          <div className="mb-5 flex items-center justify-center gap-3">
            {Icon ? (
              <Icon
                size={iconSize}
                weight="fill"
                className={cn(
                  "transition-colors duration-200",
                  selected
                    ? "text-white"
                    : "text-brand-blue group-hover:text-white"
                )}
              />
            ) : null}

            {SecondIcon ? (
              <SecondIcon
                size={iconSize}
                weight="fill"
                className={cn(
                  "transition-colors duration-200",
                  selected
                    ? "text-white"
                    : "text-brand-blue group-hover:text-white"
                )}
              />
            ) : null}
          </div>
        ) : null}

        <h3
          className={cn(
            "text-center text-xl font-bold transition-colors duration-200",
            selected ? "text-white" : "text-brand-blue group-hover:text-white"
          )}
        >
          {label}
        </h3>

        {description && (
          <p
            className={cn(
              "mt-3 text-center text-sm transition-colors duration-200",
              selected
                ? "text-white/90"
                : "text-slate-500 group-hover:text-white/90"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}
