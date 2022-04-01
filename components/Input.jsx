import React from 'react';

export const Input = ({ errors, label, register, registerName }) => {
//   console.log(registerName);
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
      {/* <div>
        {errors?.air_conditioner && (
          <p className="errorMessage">
            {errors?.air_conditioner?.message || 'Что-то заполнено неверно!'}
          </p>
        )}
      </div> */}
    </>
  );
};
