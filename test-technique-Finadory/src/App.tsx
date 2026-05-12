import { useState } from "react";

import {
  SolarProjectType,
  type SolarProjectType as SolarProjectTypeValue,
} from "@/constants/form";
import {
  existingSolarInstallationSteps,
  newSolarProjectSteps,
} from "@/data/form";

import { InitialSolarStep } from "@/components/form/InitialSolarStep";
import { ExistingFlow } from "@/components/form/existing-solar-installation/ExistingFlow";
import { NewFlow } from "@/components/form/new-solar-project/NewFlow";

const STORAGE_KEY = "finadory-form-project-type";

function getStoredProjectType(): SolarProjectTypeValue | null {
  const storedProjectType = localStorage.getItem(STORAGE_KEY);

  if (
    storedProjectType === SolarProjectType.EXISTING_INSTALLATION ||
    storedProjectType === SolarProjectType.NEW_INSTALLATION
  ) {
    return storedProjectType;
  }

  return null;
}

function App() {
  const [solarProjectType, setSolarProjectType] =
    useState<SolarProjectTypeValue | null>(getStoredProjectType);

  const existingTotalSteps = existingSolarInstallationSteps.length + 1;

  const newTotalSteps = newSolarProjectSteps.length + 1;

  function handleSelectProjectType(value: SolarProjectTypeValue) {
    localStorage.setItem(STORAGE_KEY, value);
    setSolarProjectType(value);
  }

  function handleBackToInitialStep() {
    localStorage.removeItem(STORAGE_KEY);
    setSolarProjectType(null);
  }

  switch (solarProjectType) {
    case SolarProjectType.EXISTING_INSTALLATION:
      return <ExistingFlow onBack={handleBackToInitialStep} />;

    case SolarProjectType.NEW_INSTALLATION:
      return <NewFlow onBack={handleBackToInitialStep} />;

    default:
      return (
        <InitialSolarStep
          existingTotalSteps={existingTotalSteps}
          newTotalSteps={newTotalSteps}
          onSelect={handleSelectProjectType}
        />
      );
  }
}

export default App;
