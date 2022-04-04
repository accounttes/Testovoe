import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/items';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import A from '../components/A';
import { BaseForm } from '../components/BaseForm';
import { FeatureForm } from '../components/FeatureForm';
import { OtherForm } from '../components/OtherForm/OtherForm';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { dataFormation, OptionNameInterface } from '../decompose/dataFormation';
import { OptionInterface } from '../components/OtherForm/OtherForm';
import { DataInterface } from '../decompose/dataFormation';

interface IData {
  data: {
    contacts: string;
    description: string;
    id: number;
    image: string;
    name: string;
    price: string;
  };
}

export default function Create(): React.ReactElement {
  const axios = require('axios').default;
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [form, setForm] = useState(false);
  const [optionNames, setOptionNames] = useState<OptionNameInterface[]>([]);
  const [options, setOptions] = useState<OptionInterface[]>([]);
  const [send, setSend] = useState(false);

  interface Response<T> {
    status: string;
    data: T;
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((resp: Response<Array<OptionNameInterface>>) => setOptionNames(resp.data))
      .catch((err: Error) => console.log(err));
  }, []);

  function handleForm(param: boolean): void {
    param ? setForm(param) : setForm(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: any): void => {
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
    }).then(({ data }: IData) => console.log(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <div className={form ? 'create__container' : ''}>
        <Head>
          <meta></meta>
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

              <OtherForm errors={errors} options={options} setOptions={setOptions} send={send} />
            </div>
          </div>
          <input className="button" type="submit" onClick={() => setSend(!send)} />
        </form>
      </div>
    </>
  );
}