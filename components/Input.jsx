import React from 'react';

export const Input = ({ errors, label, register, registerName }) => {
  return (
    <>
      <label className="label" style={{ marginTop: '20px' }}>
        {label}
        <input
          className="input"
          placeholder=""
          readOnly={false}
          {...register(`${registerName}`, {})}
        />
      </label>
    </>
  );
};
