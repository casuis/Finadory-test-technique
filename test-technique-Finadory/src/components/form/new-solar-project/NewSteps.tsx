type NewStepsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onBack: () => void;
};

export function NewSteps({ currentStep }: NewStepsProps) {
  return (
    <div className="p-10">Nouveau projet solaire — étape {currentStep + 1}</div>
  );
}
