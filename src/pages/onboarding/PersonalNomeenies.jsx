import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from '../../components/common/OnboardingProcess';
import { PrimaryBtn } from "../../components/common/AppButton";
import AppInput from "../../components/common/AppInput";

const NomineeDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomineeName: '',
    nomineeDob: '',
    relationship: 'Spouse'
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let currentErrors = {};

    if (!formData.nomineeName.trim()) {
      currentErrors.nomineeName = 'Nominee full name is required';
    }
    if (!formData.nomineeDob) {
      currentErrors.nomineeDob = 'Nominee date of birth is required';
    }
    if (!formData.relationship) {
      currentErrors.relationship = 'Relationship selection is required';
    }

    setErrors(currentErrors);
    setIsFormValid(Object.keys(currentErrors).length === 0);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/personal-bank');
    }
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

      {/* Progress Steps Component */}
      <OnboardingProgress currentStep={2} />

      {/* Form Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <h1 className="form-title mb-1">Nominee Details</h1>
        <p className="form-subtitle mb-4">Who should receive your investments?</p>

        <form onSubmit={handleContinue} className="onboarding-form flex-grow-1 d-flex flex-column">
          <AppInput
            label="Nominee Full Name"
            type="text"
            name="nomineeName"
            placeholder="Nominee Full Name"
            value={formData.nomineeName}
            onChange={handleChange}
            error={errors.nomineeName}
          />

          <AppInput
            label="Nominee Date of Birth"
            type="date"
            name="nomineeDob"
            value={formData.nomineeDob}
            onChange={handleChange}
            error={errors.nomineeDob}
          />

          <div className="sav-field">
            <label className="sav-field__label">Relationship</label>
            <select
              name="relationship"
              className={`sav-field__input ${errors.relationship ? 'is-invalid' : ''}`}
              value={formData.relationship}
              onChange={handleChange}
            >
              <option value="Spouse">Spouse</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
            </select>
            {errors.relationship && <div className="sav-field__error">{errors.relationship}</div>}
          </div>

          {/* Persistent Sticky Bottom Action Using Your Modular AppButton Component */}
          <div className="sticky-action-container mt-auto pt-2 pb-2">
            <PrimaryBtn
              className='w-100 mt-3'
              text='Continue'
              disabled={!isFormValid}
            />

          </div>
        </form>
      </div>
    </div>
  );
};

export default NomineeDetails;
