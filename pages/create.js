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

  function handleForm(param) {
    setForm(1);
  }

  const {
    register,
    handleSubmit,
    watch,
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

      options: {
        air_conditioner: data.air_conditioner,
        airbags: data.airbags,
        multimedia: data.multimedia,
        сruise_control: data.сruise_control,
      },
    };

    if (form === 1) {
      obj['technical_characteristics'] = {
        brand: data.brand,
        model: data.model,
        productionYear: data.productionYear,
        body: data.body,
        mileage: data.mileage,
      };
    }
    setAdded(true);
    console.log(data);
    console.log(JSON.stringify(obj));
    alert('В консоли вывелись JSON данные');
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <Head>
        <meta keywords="test next.js addUser"></meta>
        <title>Добавление пользователя</title>
      </Head>

      <A href="/" text="Назад" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          marginTop: '100px',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '500px',
          marginLeft: '35%',
        }}>
        <div>
          <div>
            <h2 style={{ marginBottom: '20px' }}>Базовые данные</h2>
            <BaseForm errors={errors} register={register}></BaseForm>
          </div>

          <div>
            <button
              className="button"
              type="text"
              onClick={() => handleForm(1)}
              style={form === 1 ? { visibility: 'hidden' } : null}>
              Добавить технические характеристики
            </button>
            {form === 1 ? <FeatureForm errors={errors} register={register}></FeatureForm> : null}
          </div>

          <div style={{ marginLeft: '150px', marginTop: '20px' }}>
            <h2>Доп. опции</h2>
            <OtherForm errors={errors} register={register}></OtherForm>
          </div>
        </div>

        <input
          className="button"
          type="submit"
          style={{ marginLeft: '10px', marginTop: '10px', height: '30px' }}
        />
      </form>
    </>
  );
}
