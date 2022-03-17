import { useRouter } from 'next/router';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { A } from '../../components/A';

export default function View() {
  const items = useSelector(({ users }) => users.items);
  const { query } = useRouter();

  const currUser = items.filter((item, index) => {
    return index + 1 === Number(query.id);
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Имя пользователя</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currUser[0].name}</td>
          <td>{currUser[0].username}</td>
        </tr>
      </tbody>
    </Table>
  );
}
