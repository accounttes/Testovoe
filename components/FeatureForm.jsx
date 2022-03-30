import React from 'react';

export const FeatureForm = ({ errors, register }) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <label className="label">
        Марка
        <input
          className="input"
          placeholder=""
          readOnly={false}
          {...register('brand', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.brand && (
          <p className="errorMessage">{errors?.brand?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>

      <label className="label">
        Модель
        <input
          className="input"
          placeholder=""
          readOnly={false}
          {...register('model', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.model && (
          <p className="errorMessage">{errors?.model?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>

      <label className="label">
        Год выпуска
        <input
          className="input"
          placeholder=""
          readOnly={false}
          {...register('productionYear', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.productionYear && (
          <p className="errorMessage">
            {errors?.productionYear?.message || 'Что-то заполнено неверно!'}
          </p>
        )}
      </div>

      <label className="label">
        Кузов
        <input
          className="input"
          placeholder=""
          readOnly={false}
          {...register('body', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.body && (
          <p className="errorMessage">{errors?.body?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>

      <label className="label">
        Пробег
        <input
          className="input"
          placeholder=""
          readOnly={false}
          {...register('mileage', {
            required: 'Поле обязательно к заполнению',
          })}
        />
      </label>
      <div>
        {errors?.mileage && (
          <p className="errorMessage">{errors?.mileage?.message || 'Что-то заполнено неверно!'}</p>
        )}
      </div>
    </div>
  );
};
