import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import A from '../components/A';
import Head from 'next/head';
import { useTypedSelector } from '../store/hooks/useTypesSelector';
import { ItemsState } from '../types/items';

export default function List(): React.ReactElement {
  const items: Array<ItemsState> = useTypedSelector((state: ItemsState) => state.users.items);

  return (
    <>
      <Head>
        <meta></meta>
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
            items.map((item: any, index: any) => (
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
