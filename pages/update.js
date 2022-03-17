import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchItem } from '../store/actions/items';
import { Table } from 'react-bootstrap';
import A from '../components/A.js';
import Head from 'next/head';

export default function Search({ users }) {
  const items = useSelector(({ users }) => users.items);

  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  function handleValue(e) {
    setValue(e.target.value);
    dispatch(searchItem(e.target.value));

    if (e.target.value === '') {
      alert('Вернитесь назад)');
    }
  }

  return (
    <>
      <Head>
        <meta keywords="test next.js searchUser"></meta>
        <title>Найти</title>
      </Head>

      <A href="/" text="Назад" />
      <input
        placeholder="Имя или имя пользователя"
        value={value}
        onChange={handleValue}
        style={{ width: '400px' }}></input>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Имя пользователя</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.username}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
