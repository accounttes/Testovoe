import React, { useState } from 'react';
import { Input } from './Input';

export const OtherForm = ({ errors, register, currentStep, setCurrentStep }) => {
  function handleForm() {
    setCurrentStep([...currentStep, currentStep[currentStep.length - 1] + 1]);
  }

  return (
    <>
      {currentStep.map((number, index) => (
        <Input
          key={index}
          errors={errors}
          register={register}
          label={'label'}
          registerName={number}
        />
      ))}

      <button className="button button__option" type="button" onClick={() => handleForm()}>
        Еще
      </button>
    </>
  );
};
