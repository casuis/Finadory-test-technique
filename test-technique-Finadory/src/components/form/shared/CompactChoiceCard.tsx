import type { Icon } from "@phosphor-icons/react";

import { Card } from "@/components/ui";

import { cn } from "@/lib/utils";

type CompactChoiceCardProps = {
  label: string;

  description?: string;

  icon: Icon;

  selected: boolean;

  onClick: () => void;
};

export function CompactChoiceCard({
  label,
  description,
  icon: Icon,
  selected,
  onClick,
}: CompactChoiceCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        `
          group
          cursor-pointer
          rounded-xl
          border-2
          px-6
          py-5
          transition-all
          duration-200
        `,
        selected
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
      )}
    >
     <div className="flex items-center gap-5">
  <div className="shrink-0">
    <Icon
      size={40}
      weight="fill"
      className={cn(
        "transition-colors duration-200",
        selected
          ? "text-white"
          : "text-brand-blue group-hover:text-white"
      )}
    />
  </div>

  <div className="space-y-1">
    <h3 className="text-lg font-semibold">
      {label}
    </h3>

    {description && (
      <p
        className={cn(
          "text-sm leading-relaxed",
          selected
            ? "text-white/90"
            : "text-slate-500 group-hover:text-white/90"
        )}
      >
        {description}
      </p>
    )}
  </div>
</div>
    </Card>
  );
}