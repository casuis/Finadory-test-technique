import { Progress } from "@/components/ui";

/**
 * Header partagé des étapes.
 *
 * Contient :
 * - progression
 * - numéro étape
 * - pourcentage
 * - question
 * - helper
 * - sous-titre éventuel
 */

type FormProgressHeaderProps = {
  currentStep: number;

  totalSteps: number;

  progressValue: number;

  helper: string;

  question: string;

  subtitle?: string;
};

export function FormProgressHeader({
  currentStep,
  totalSteps,
  progressValue,
  helper,
  question,
  subtitle,
}: FormProgressHeaderProps) {
  return (
    <div className="space-y-6 px-10 pt-10">
      {/**
       * Partie supérieure progression.
       */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            Étape {currentStep + 1}/{totalSteps}
          </p>

          <p className="text-sm font-semibold text-brand-blue">
            {progressValue}%
          </p>
        </div>

        <Progress
          value={progressValue}
          className="
            h-2
            overflow-hidden
            rounded-full
            bg-brand-blue/15
            [&>div]:rounded-full
            [&>div]:bg-brand-blue
          "
        />
      </div>

      {/**
       * Partie contenu texte.
       */}
      <div className="space-y-3 text-center">
        <p className="text-sm font-medium text-slate-400">
          {helper}
        </p>

        <h2 className="text-[24px] font-bold text-brand-blue">
          {question}
        </h2>

        {subtitle && (
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
