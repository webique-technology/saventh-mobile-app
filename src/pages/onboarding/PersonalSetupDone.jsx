import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from '../../components/common/OnboardingProcess';
import { PrimaryBtn } from "../../components/common/AppButton";

const SetupDone = () => {
  const navigate = useNavigate();

  const handleCompleteKYC = (e) => {
    e.preventDefault();
    // Navigate to next core module flow or dashboard
    navigate('/kyc/verification');
  };

  return (
    <div className="onboarding-page-container container-fluid d-flex flex-column">
      {/* Top Navbar */}
      <div className="onboarding-navbar d-flex align-items-center mb-3">
        <button className="back-btn btn p-0" onClick={() => navigate(-1)} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D6B4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </div>

      {/* Progress Steps Component set to index 4 (Done) */}
      <OnboardingProgress currentStep={4} />

      {/* Main Success Content Area */}
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-2">
        {/* Animated Green Check Vector Circle Badge */}
        <div className="success-badge-wrapper mb-4 d-flex align-items-center justify-content-center">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#0D6B4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="success-title mb-2">Account Setup Done!</h1>
        <p className="success-subtitle mb-5">Now let's complete your KYC to start investing.</p>
      </div>

      {/* Action Container Utilizing Your Modular AppButton Component */}
      <div className="sticky-action-container mt-auto pt-2 pb-2">
        <PrimaryBtn
          className='w-100 mt-3'
          title='Complete KYC'
          onClick={handleCompleteKYC}
          text='Complete KYC'
        // disabled={!isFormValid}
        />
        
      </div>
    </div>
  );
};

export default SetupDone;
