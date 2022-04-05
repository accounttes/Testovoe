import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorsFormProps } from './types/ErrorsType';

interface BaseFormProps {
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
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
}

export const BaseForm: React.FC<BaseFormProps> = ({
  errors,
  register,
}: BaseFormProps): React.ReactElement => {
  return (
    <>
      <label className="label">
        Название
        <input
          className="input"
          placeholder="Введите название"
          readOnly={false}
          {...register('name', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.name && (
          <p className="errorMessage">{errors?.name?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>

      <label className="label">
        Описание
        <input
          className="input"
          placeholder="Введите описание"
          readOnly={false}
          {...register('description', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.description && (
          <p className="errorMessage">
            {errors?.description?.message || 'Что-то заполнено неверно!'}
          </p>
        )}
      </div>

      <label className="label">
        Цена
        <input
          className="input"
          placeholder="Введите цену"
          readOnly={false}
          {...register('price', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.price && (
          <p className="errorMessage"> {errors?.price?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>

      <label className="label">
        Фото
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg, image/jpg"
          {...register('image', {
            required: 'Выберите фото',
          })}></input>
      </label>
      <div>
        {errors?.image && (
          <p className="errorMessage">{errors?.image?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>

      <label className="label">
        Контакты
        <input
          className="input"
          placeholder="Введите контакты"
          readOnly={false}
          {...register('contacts', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.contacts && (
          <p className="errorMessage">{errors?.contacts?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>
    </>
  );
};
