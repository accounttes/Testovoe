import React, { useEffect } from 'react';
import axios from 'axios';
import { dispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/items';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import A from '../components/A.js';
import { BaseForm } from '../components/BaseForm.jsx';
import { FeatureForm } from '../components/FeatureForm.jsx';
import { OtherForm } from '../components/OtherForm/OtherForm.jsx';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { dataFormation } from '../decompose/dataFormation';

export default function Create() {
  const axios = require('axios').default;

  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [form, setForm] = useState(null);

  const [optionNames, setOptionNames] = useState([]);

  const [options, setOptions] = useState([]);

  const [send, setSend] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((resp) => setOptionNames(resp.data))
      .catch((err) => console.log(err));
  }, []);

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
    dataFormation(data, form, options, optionNames);

    setAdded(true);
    alert('Пошел POST запрос');

    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(({ data }) => console.log(data));
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
                <Button
                  className="button"
                  type="button"
                  onClick={() => handleForm(true)}
                  variant="outline-primary">
                  Добавить технические характеристики
                </Button>
              )}
              {form && (
                <Button
                  className="button"
                  style={{ background: '#ff033e' }}
                  type="button"
                  onClick={() => handleForm(false)}>
                  Отменить добавление технических характеристик
                </Button>
              )}
              {form && <FeatureForm errors={errors} register={register}></FeatureForm>}
            </div>

            <div style={{ marginTop: '20px' }}>
              <h2 style={{ marginLeft: '20px' }}>Доп. опции</h2>

              <OtherForm
                optionNames={optionNames}
                errors={errors}
                register={register}
                options={options}
                setOptions={setOptions}
                send={send}
              />
            </div>
          </div>
          <input className="button" type="submit" onClick={() => setSend(!send)} />
        </form>
      </div>
    </>
  );
}
