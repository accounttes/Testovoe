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
    console.log(e);

    if (items.length === 0) {
      const newContacts = users.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value) ||
          item.username.toLowerCase().includes(e.target.value),
      );
      dispatch(searchItem(newContacts));
    } else {
      e.target.value === '' ? dispatch(searchItem(users)) : dispatch(searchItem(e.target.value));
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

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
