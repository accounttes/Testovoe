import React from 'react';
import { dispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/items';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import A from '../components/A.js';
import { BaseForm } from '../components/BaseForm.jsx';
import { FeatureForm } from '../components/FeatureForm.jsx';
import { OtherForm } from '../components/OtherForm.jsx';
import Head from 'next/head';

export default function Create() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [form, setForm] = useState(null);
  const [currentStep, setCurrentStep] = useState([0]);

  function handleForm(param) {
    param ? setForm(param) : setForm(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    const obj = {
      id: Math.random().toString(16).slice(2),
      image: data.image,
      name: data.name,
      description: data.description,
      price: data.price,
      contacts: data.contacts,
    };

    if (form) {
      obj['technical_characteristics'] = {
        car__id: Math.random().toString(16).slice(2),
        brand: data.brand,
        model: data.model,
        productionYear: data.productionYear,
        body: data.body,
        mileage: data.mileage,
      };
    }

    const optionsObj = {};

    for (let key in currentStep) {
      optionsObj[key] = data[key];
    }

    obj['options'] = optionsObj;

    setAdded(true);
    alert('Пошел POST запрос');
    console.log(obj);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => console.log(JSON.stringify(data)));
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <div className={form ? 'create__container' : ''}>
        <Head>
          <meta keywords="test next.js addUser"></meta>
          <title>Добавление пользователя</title>
        </Head>

        <A href="/" text="Назад" />
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div>
            <div>
              <h2 style={{ marginBottom: '20px' }}>Базовые данные</h2>
              <BaseForm errors={errors} register={register}></BaseForm>
            </div>

            <div>
              {!form && (
                <button className="button" type="button" onClick={() => handleForm(true)}>
                  Добавить технические характеристики
                </button>
              )}
              {form && (
                <button
                  className="button"
                  style={{ background: '#ff033e' }}
                  type="button"
                  onClick={() => handleForm(false)}>
                  Отменить добавление технических характеристик
                </button>
              )}
              {form && <FeatureForm errors={errors} register={register}></FeatureForm>}
            </div>

            <div style={{ marginTop: '20px' }}>
              <h2>Доп. опции</h2>
              <OtherForm
                errors={errors}
                register={register}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}></OtherForm>
            </div>
            <input className="button" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
