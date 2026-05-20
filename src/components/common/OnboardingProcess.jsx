import React from 'react';

const OnboardingProgress = ({ currentStep, steps = ['Personal', 'Address', 'Nominees', 'Bank', 'Done'] }) => {
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="onboarding-progress-container">
      <div className="step-counter text-center mb-2">
        Step {currentStep + 1} of {steps.length}
      </div>
      
      <div className="progress-bar-wrapper mb-4">
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="tabs-wrapper d-flex justify-content-between align-items-center gap-2 mb-4">
        {steps.map((step, index) => {
          let tabClass = 'tab-item';
          if (index === currentStep) tabClass += ' active';
          else if (index < currentStep) tabClass += ' completed';

          return (
            <div key={step} className={tabClass}>
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingProgress;
