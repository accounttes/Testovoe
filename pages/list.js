import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import A from '../components/A';
import Head from 'next/head';

export default function List() {
  const items = useSelector(({ users }) => users.items);

  return (
    <>
      <Head>
        <meta keywords="test next.js listUsers"></meta>
        <title>Список пользователей</title>
      </Head>

      <A href="/" text="Назад" />
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
