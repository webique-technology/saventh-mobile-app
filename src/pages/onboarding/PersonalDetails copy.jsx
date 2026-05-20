import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from '../../components/common/OnboardingProcess';
import { PrimaryBtn } from "../../components/common/AppButton";
import AppInput from "../../components/common/AppInput";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    panNumber: '',
    dob: '',
    gender: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'panNumber') {
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

    if (!formData.firstName.trim()) currentErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) currentErrors.lastName = 'Last name is required';

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!formData.panNumber) {
      currentErrors.panNumber = 'PAN number is required';
    } else if (!panRegex.test(formData.panNumber)) {
      currentErrors.panNumber = 'Invalid PAN format (e.g. ABCDE1234F)';
    }

    if (!formData.dob) currentErrors.dob = 'Date of birth is required';
    if (!formData.gender) currentErrors.gender = 'Gender selection is required';

    setErrors(currentErrors);
    setIsFormValid(Object.keys(currentErrors).length === 0);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/personal-address');
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

      {/* Dynamic Tab & Progress Bar */}
      <OnboardingProgress currentStep={0} />

      {/* Main Content Area */}
      <div className="flex-grow-1">
        <h1 className="form-title mb-1">Personal Details</h1>
        <p className="form-subtitle mb-4">As per your PAN card</p>

        <form onSubmit={handleContinue} className="">
          <AppInput
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Rahul"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <AppInput
            label="Middle Name"
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
          />

          <AppInput
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Sharma"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />

          <AppInput
            label="PAN Number"
            type="text"
            name="panNumber"
            maxLength="10"
            className="text-uppercase"
            placeholder="ABCDE1234F"
            value={formData.panNumber}
            onChange={handleChange}
            error={errors.panNumber}
          />

          <AppInput
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
          />

          {/* Standard standalone section select box structure matching field variables layout */}
          <div className="sav-field">
            <label className="sav-field__label">Gender</label>
            <select
              name="gender"
              className={`sav-field__input ${errors.gender ? 'is-invalid' : ''}`}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="sav-field__error">{errors.gender}</div>}
          </div>

          {/* Persistent Sticky Bottom Continue Button */}
          <PrimaryBtn
            className='w-100 mt-3'
            text='Continue'
            disabled={!isFormValid}
          />
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
