import React from 'react';

export const OtherForm = ({ errors, register }) => {
  return (
    <>
      <ul className="list">
        <li>
          <label>
            Кондиционер
            <input
              className="input option"
              placeholder=""
              type="checkbox"
              readOnly={false}
              {...register('air_conditioner', {})}
            />
          </label>
        </li>
        <li>
          <label>
            Подушки безопасности
            <input
              className="input option"
              placeholder=""
              type="checkbox"
              readOnly={false}
              {...register('airbags', {})}
            />
          </label>
        </li>
        <li>
          <label>
            Мультимедия
            <input
              className="input option"
              placeholder=""
              type="checkbox"
              readOnly={false}
              {...register('multimedia', {})}
            />
          </label>
        </li>
        <li>
          <label>
            Круиз контроль
            <input
              className="input option"
              placeholder=""
              type="checkbox"
              readOnly={false}
              {...register('сruise_control', {})}
            />
          </label>
        </li>
      </ul>
    </>
  );
};
