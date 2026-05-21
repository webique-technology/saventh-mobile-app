import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from '../../components/common/OnboardingProcess';
import { PrimaryBtn } from "../../components/common/AppButton";
import AppInput from "../../components/common/AppInput";

const BankAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountType: 'Savings' // Default value matching image layout wireframe
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'ifscCode') {
      processedValue = value.toUpperCase();
    }

    setFormData({
      ...formData,
      [name]: processedValue
    });
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let currentErrors = {};

    if (!formData.bankName.trim()) {
      currentErrors.bankName = 'Bank name is required';
    }

    // Basic Indian Account Number rule validation range (between 9 to 18 digits)
    const accRegex = /^[0-9]{9,18}$/;
    if (!formData.accountNumber) {
      currentErrors.accountNumber = 'Account number is required';
    } else if (!accRegex.test(formData.accountNumber.trim())) {
      currentErrors.accountNumber = 'Invalid account number format';
    }

    // Standard Indian IFSC code rule validation pattern
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!formData.ifscCode) {
      currentErrors.ifscCode = 'IFSC code is required';
    } else if (!ifscRegex.test(formData.ifscCode)) {
      currentErrors.ifscCode = 'Invalid IFSC format (e.g. SBIN0012345)';
    }

    if (!formData.accountType) {
      currentErrors.accountType = 'Account type selection is required';
    }

    setErrors(currentErrors);
    setIsFormValid(Object.keys(currentErrors).length === 0);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/personal-setup-done');
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

      {/* Progress Steps Component set to index 3 (Bank) */}
      <OnboardingProgress currentStep={3} />

      {/* Form Content Area */}
      <div className="flex-grow-1 d-flex flex-column">
        <h1 className="form-title mb-1">Bank Account</h1>
        <p className="form-subtitle mb-4">For investments and redemptions</p>

        <form onSubmit={handleContinue} className="onboarding-form flex-grow-1 d-flex flex-column">
          <AppInput
            label="Bank Name"
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={formData.bankName}
            onChange={handleChange}
            error={errors.bankName}
          />

          <AppInput
            label="Account Number"
            type="text"
            name="accountNumber"
            placeholder="123456789012334"
            value={formData.accountNumber}
            onChange={handleChange}
            error={errors.accountNumber}
          />

          <AppInput
            label="IFSC Code"
            type="text"
            name="ifscCode"
            maxLength="11"
            className="text-uppercase"
            placeholder="IFSC Code"
            value={formData.ifscCode}
            onChange={handleChange}
            error={errors.ifscCode}
          />

          {/* Select styling parameters matching common input wrapper tokens layout */}
          <div className="sav-field">
            <label className="sav-field__label">Account Type</label>
            <select
              name="accountType"
              className={`sav-field__input ${errors.accountType ? 'is-invalid' : ''}`}
              value={formData.accountType}
              onChange={handleChange}
            >
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
            {errors.accountType && <div className="sav-field__error">{errors.accountType}</div>}
          </div>

          {/* Persistent Sticky Bottom Action Using Modular AppButton Component */}
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

export default BankAccount;
