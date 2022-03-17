import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import A from '../components/A';
import Head from 'next/head';

export default function Update() {
  const items = useSelector(({ users }) => users.items);

  return (
    <>
      <Head>
        <meta keywords="test next.js searchUser"></meta>
        <title>Найти пользователя</title>
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <A href="/" text="Назад" />
        <ListGroup>
          {items &&
            items.map((item, id) => (
              <ListGroup.Item key={id}>
                <A href={`/search/${item.id}`} text={`Пользователь ${item.id}`} key={id} />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  );
}
