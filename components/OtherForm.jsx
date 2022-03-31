import React, { useState } from 'react';

export const OtherForm = ({ errors, register }) => {
  const [optionFirst, setOptionFirst] = useState(false);
  const [optionSecond, setOptionSecond] = useState(false);
  const [optionThird, setOptionThird] = useState(false);
  const [optionFourth, setOptionFourth] = useState(false);

  function handleForm(param) {
    optionFirst === false ? setOptionFirst(true) : true;
    optionFirst === true ? (optionSecond === false ? setOptionSecond(true) : true) : null;
    optionSecond === true ? (optionThird === false ? setOptionThird(true) : true) : null;
    optionThird === true ? (optionFourth === false ? setOptionFourth(true) : true) : null;
  }

  return (
    <>
      <button className="button button__option" type="button" onClick={() => handleForm()}>
        Добавить опцию
      </button>

      {optionFirst === true ? (
        <>
          <label className="label" style={{ marginTop: '20px' }}>
            Кондиционер
            <input
              className="input"
              placeholder=""
              readOnly={false}
              {...register('air_conditioner', {})}
            />
          </label>
          <div>
            {errors?.air_conditioner && (
              <p className="errorMessage">
                {errors?.air_conditioner?.message || 'Что-то заполнено неверно!'}
              </p>
            )}
          </div>
        </>
      ) : null}

      {optionSecond === true ? (
        <>
          <label className="label" style={{ marginTop: '20px' }}>
            Подушки безопасности
            <input className="input" placeholder="" readOnly={false} {...register('airbags', {})} />
          </label>
          <div>
            {errors?.airbags && (
              <p className="errorMessage">
                {errors?.airbags?.message || 'Что-то заполнено неверно!'}
              </p>
            )}
          </div>
        </>
      ) : null}

      {optionThird === true ? (
        <>
          <label className="label" style={{ marginTop: '20px' }}>
            Мультимедия
            <input
              className="input"
              placeholder=""
              readOnly={false}
              {...register('multimedia', {})}
            />
          </label>

          <div>
            {errors?.multimedia && (
              <p className="errorMessage">
                {errors?.multimedia?.message || 'Что-то заполнено неверно!'}
              </p>
            )}
          </div>
        </>
      ) : null}

      {optionFourth === true ? (
        <>
          <label className="label" style={{ marginTop: '20px' }}>
            Круиз контроль
            <input
              className="input"
              placeholder=""
              readOnly={false}
              {...register('сruise_control', {})}
            />
          </label>

          <div>
            {errors?.сruise_control && (
              <p className="errorMessage">
                {errors?.сruise_control?.message || 'Что-то заполнено неверно!'}
              </p>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};
