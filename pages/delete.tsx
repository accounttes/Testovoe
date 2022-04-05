import { useState } from 'React';
import { ListGroup } from 'react-bootstrap';
import A from '../components/A';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/actions/items';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { useTypedSelector } from '../store/hooks/useTypesSelector';
import { ItemsState } from '../types/items';

export interface ItemInterface {
  address: any[];
  company: any[];
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export default function Delete(): React.ReactElement {
  const items = useTypedSelector((state: ItemsState) => state.users.items);

  const dispatch = useDispatch();

  function handleItems(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(removeItem(Number((e.target as HTMLMediaElement).dataset.id)));
  }

  return (
    <>
      <Head>
        <meta></meta>
        <title>Удаление пользователя</title>
      </Head>

      <A href="/" text="Назад" />
      <ListGroup>
        {items &&
          items.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.username}
              <Button
                onClick={handleItems}
                data-id={item.id}
                style={{ marginLeft: '20px' }}
                variant="outline-danger">
                Удалить
              </Button>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}
