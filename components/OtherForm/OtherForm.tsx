import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { Button } from 'react-bootstrap';

import { ErrorsFormProps } from '../types/ErrorsType';

export interface OptionInterface {
  option__name: string;
  name: string;
}

interface OtherFormProps {
  errors: {
    body?: ErrorsFormProps;
    brand?: ErrorsFormProps;
    contacts?: ErrorsFormProps;
    description?: ErrorsFormProps;
    image?: ErrorsFormProps;
    mileage?: ErrorsFormProps;
    model?: ErrorsFormProps;
    name?: ErrorsFormProps;
    price?: ErrorsFormProps;
    productionYear?: ErrorsFormProps;
  };
  options: Array<OptionInterface>;
  setOptions: (options: Array<OptionInterface>) => void;
  send: boolean;
}

export const OtherForm: React.FC<OtherFormProps> = ({
  errors,
  options,
  setOptions,
  send,
}: OtherFormProps): React.ReactElement => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: 'fieldArray',
  });

  const optionsData: Array<OptionInterface> = useWatch({
    control,
    name: 'fieldArray', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
  });

  function sendOptionsData() {
    setOptions(optionsData);
  }

  return (
    <>
      {optionsData &&
        optionsData.map((field, index) => {
          return (
            <input
              onInput={() => sendOptionsData()}
              className="input"
              style={{ marginLeft: '15px' }}
              {...register(`fieldArray.${index}.name`)}
              key={index}
              placeholder="Введите опцию"
            />
          );
        })}

      <Button
        className="button"
        type="button"
        onClick={() =>
          append({
            option__name: '',
          })
        }>
        Еще
      </Button>
    </>
  );
};
