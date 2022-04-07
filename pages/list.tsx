import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import A from "../components/A";
import Head from "next/head";
import { useTypedSelector } from "../store/hooks/useTypesSelector";
import { ItemInterface, ItemsState } from "../types/items";

export default function List(): React.ReactElement {
  const items: Array<ItemInterface> = useTypedSelector(
    (state: any) => state.users.items
  );

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
            <th>Марка</th>
            <th>Модель</th>
            <th>Год выпуска</th>
            <th>Тип кузова</th>
            <th>Пробег</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.year}</td>
                <td>{item.body}</td>
                <td>{item.mileage}</td>
                <td>{item.price}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
