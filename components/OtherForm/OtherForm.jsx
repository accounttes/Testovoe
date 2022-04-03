import React, { useState, useEffect } from 'react';
import { Input } from '../Input';
import { useForm, useFieldArray } from 'react-hook-form';

let renderCount = 0;

export const OtherForm = ({ errors, options, setOptions, send }) => {
  const { register, handleSubmit, control, watch } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: 'fieldArray',
  });

  renderCount++;
  const watchFieldArray = watch('fieldArray');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  useEffect(() => {
    setOptions(controlledFields);
  }, [send]);

  return (
    <>
      {controlledFields.map((field, index) => {
        return (
          <input
            className="input"
            style={{ marginLeft: '15px' }}
            {...register(`fieldArray.${index}.name`)}
            key={index}
            placeholder="Введите опцию"
          />
        );
      })}

      <button
        className="button"
        type="button"
        onClick={() =>
          append({
            option__name: '',
          })
        }>
        Еще
      </button>
    </>
  );
};
