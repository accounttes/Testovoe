import { useState } from 'React';
import { ListGroup } from 'react-bootstrap';
import A from '../components/A.js';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/actions/items';
import Head from 'next/head';

export default function Delete() {
  const items = useSelector(({ users }) => users.items);
  const dispatch = useDispatch();

  function handleItems(e) {
    if (e.target.value === 1) {
      alert('Вернитесь назад)');
    }
    dispatch(removeItem(Number(e.target.dataset.id)));
  }

  return (
    <>
      <Head>
        <meta keywords="test next.js removeUser"></meta>
        <title>Удаление пользователя</title>
      </Head>

      <A href="/" text="Назад" />
      <ListGroup>
        {items &&
          items.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.username}
              <button onClick={handleItems} data-id={item.id} style={{ marginLeft: '20px' }}>
                Удалить
              </button>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}
