import { dispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/items';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import A from '../components/A.js';
import Head from 'next/head';

export default function Create() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addItem(data));
    setAdded(true);
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
        <label style={{ marginLeft: '10px', height: '30px' }}>Имя</label>
        <input
          {...register('name', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          style={{ marginLeft: '10px', height: '30px' }}
        />
        {errors?.username?.type === 'required' && (
          <p style={{ color: 'red', marginLeft: '150px' }}>Это поле обязательно к заполнению</p>
        )}
        {errors?.username?.type === 'maxLength' && (
          <p style={{ color: 'red', marginLeft: '150px' }}>Имя не может превышать 20 символов</p>
        )}
        {errors?.username?.type === 'pattern' && (
          <p style={{ color: 'red', marginLeft: '150px' }}>Только буквенные символы</p>
        )}
        <label style={{ marginLeft: '10px' }}>Имя пользователя</label>
        <input
          {...register('username', { pattern: /^[A-Za-z]+$/i })}
          style={{ marginLeft: '10px', marginTop: '10px', height: '30px' }}
        />
        {added && <p style={{ marginLeft: '10px', fontSize: '20px', color: 'green' }}>Добавлено</p>}
        {errors?.username?.type === 'required' && (
          <p style={{ color: 'red', marginLeft: '150px' }}>Это поле обязательно к заполнению</p>
        )}
        {errors?.username?.type === 'pattern' && (
          <p style={{ color: 'red', marginLeft: '150px' }}>Только буквенные символы</p>
        )}

        <input type="submit" style={{ marginLeft: '10px', marginTop: '10px', height: '30px' }} />
      </form>
    </>
  );
}
