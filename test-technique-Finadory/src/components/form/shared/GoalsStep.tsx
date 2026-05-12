import { goalsStep, equipmentTimingChoices } from "@/data/form";

/**
 * Étape objectifs utilisateur.
 *
 * Cette étape contient :
 * - sélection objectifs (max 2)
 * - timing équipement
 */

type GoalsStepProps = {
  /**
   * Objectifs actuellement sélectionnés.
   */
  goalAnswers: string[];

  /**
   * Timing actuellement sélectionné.
   */
  equipmentTiming: string;

  /**
   * Toggle objectif.
   */
  onGoalSelect: (value: string) => void;

  /**
   * Sélection timing.
   */
  onEquipmentTimingSelect: (value: string) => void;
};

export function GoalsStep({
  goalAnswers,
  equipmentTiming,
  onGoalSelect,
  onEquipmentTimingSelect,
}: GoalsStepProps) {
  return (
    <div className="space-y-10">
      {/**
       * Sélection objectifs.
       */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {goalsStep.choices.map((choice) => {
            const isSelected = goalAnswers.includes(choice.id);

            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => onGoalSelect(choice.id)}
                className={`
                  min-h-[82px]
                  cursor-pointer
                  rounded-lg
                  border-2
                  px-6
                  py-5
                  text-center
                  text-base
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    isSelected
                      ? "border-brand-blue bg-brand-blue text-white"
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
                {choice.label}
              </button>
            );
          })}
        </div>
      </div>

      {/**
       * Sélection timing projet.
       */}
      {goalAnswers.length > 0 && (
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-brand-blue">
              Quand souhaitez-vous être équipé ?
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {equipmentTimingChoices.map((choice) => (
              <button
                key={choice.id}
                type="button"
                onClick={() => onEquipmentTimingSelect(choice.id)}
                className={`
                  cursor-pointer
                  rounded-lg
                  border
                  px-4
                  py-4
                  text-center
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    equipmentTiming === choice.id
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
                {choice.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
