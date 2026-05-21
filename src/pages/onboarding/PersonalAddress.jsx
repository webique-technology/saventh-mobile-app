import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from '../../components/common/OnboardingProcess';
import { PrimaryBtn } from "../../components/common/AppButton";
import AppInput from "../../components/common/AppInput";

const CommunicationAddress = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    pinCode: '',
    country: ''
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

    if (!formData.address.trim()) currentErrors.address = 'Address is required';
    if (!formData.city.trim()) currentErrors.city = 'City is required';
    if (!formData.state.trim()) currentErrors.state = 'State is required';

    // Quick basic validation for 6-digit PIN code
    const pinRegex = /^[0-9]{6}$/;
    if (!formData.pinCode) {
      currentErrors.pinCode = 'PIN code is required';
    } else if (!pinRegex.test(formData.pinCode.trim())) {
      currentErrors.pinCode = 'PIN code must be exactly 6 digits';
    }

    if (!formData.country.trim()) currentErrors.country = 'Country is required';

    setErrors(currentErrors);
    setIsFormValid(Object.keys(currentErrors).length === 0);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/personal-nominees');
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

      {/* Progress Steps Component set to index 1 (Address) */}
      <OnboardingProgress currentStep={1} />

      {/* Form Content */}
      <div className="flex-grow-1">
        <h1 className="form-title mb-1">Communication Address</h1>
        <p className="form-subtitle mb-4">For account statements and correspondence</p>

        <form onSubmit={handleContinue} className="">
          <AppInput
            label="Address"
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
          />

          <AppInput
            label="City"
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
          />

          <AppInput
            label="State"
            type="text"
            name="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
          />

          <AppInput
            label="Pin Code"
            type="text"
            name="pinCode"
            maxLength="6"
            placeholder="Enter pin code"
            value={formData.pinCode}
            onChange={handleChange}
            error={errors.pinCode}
          />

          <AppInput
            label="Country"
            type="text"
            name="country"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
          />

          {/* Sticky Bottom Actions Container */}
          <div className="sticky-action-container mt-auto pt-4 pb-2">
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

export default CommunicationAddress;
