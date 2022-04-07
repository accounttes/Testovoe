import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterItem } from "../store/actions/items";
import { Table, Form, Button } from "react-bootstrap";
import A from "../components/A";
import Head from "next/head";
import { useTypedSelector } from "../store/hooks/useTypesSelector";
import { ItemInterface } from "./delete";
import { ItemsState } from "../types/items";
import { Context } from "next-redux-wrapper";
import { useForm } from "react-hook-form";

interface IUsers {
  users: Array<ItemInterface>;
}

export default function Update({ users }: IUsers): React.ReactElement {
  const items = useTypedSelector((state: ItemsState) => state.users.items);
  const neit = useTypedSelector(
    (state: ItemsState) => state.users.defaultItems
  );

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [rangeVal, setRangeVal] = useState<number>(8);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [body, setBody] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    dispatch(filterItem(data));
  };

  return (
    <>
      <Head>
        <meta></meta>
        <title>Найти</title>
      </Head>

      <A href="/" text="Назад" />
      <div className="table__filter">
        <Table className="table" striped bordered hover>
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
            {neit === undefined
              ? items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.year}</td>
                    <td>{item.body}</td>
                    <td>{item.mileage}</td>
                    <td>{item.price}</td>
                  </tr>
                ))
              : neit.map((item, index) => (
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
        <div className="filter">
          <div className="filter__wrapper">
            <form onSubmit={handleSubmit(onSubmit as any)}>
              <label className="label">
                Марка
                <input
                  className="input input__upper"
                  placeholder="Введите марку"
                  readOnly={false}
                  {...register("brand", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
              </label>
              <div>
                {errors?.brand && (
                  <p className="errorMessage">
                    {errors?.brand?.message || "Что-то заполнено неверно!"}
                  </p>
                )}
              </div>

              <label className="label">
                Модель
                <input
                  className="input input__upper"
                  placeholder="Введите модель"
                  readOnly={false}
                  {...register("model", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: /[A-Z]/,
                      message: "Только заглавные буквы",
                    },
                  })}
                />
              </label>
              <div>
                {errors?.model && (
                  <p className="errorMessage">
                    {errors?.model?.message || "Что-то заполнено неверно!"}
                  </p>
                )}
              </div>

              <label className="label">
                Год выпуска
                <input
                  className="input"
                  type="date"
                  placeholder="Введите год выпуска"
                  readOnly={false}
                  {...register("year", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
              </label>
              <div>
                {errors?.year && (
                  <p className="errorMessage">
                    {errors?.year?.message || "Что-то заполнено неверно!"}
                  </p>
                )}
              </div>

              <label className="label">
                Тип кузова
                <input
                  className="input input__body"
                  placeholder="Введите тип кузова"
                  readOnly={false}
                  {...register("body", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: /[a-z]/,
                      message: "Только строчные буквы",
                    },
                  })}
                />
              </label>
              <div>
                {errors?.body && (
                  <p className="errorMessage">
                    {errors?.body?.message || "Что-то заполнено неверно!"}
                  </p>
                )}
              </div>
              <label className="label">
                Пробег ОТ
                <input
                  className="input"
                  placeholder="Введите тип кузова"
                  type="number"
                  readOnly={false}
                  {...register("mileage_from", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
              </label>
              <label className="label">
                Пробег ДО
                <input
                  className="input"
                  placeholder="Введите тип кузова"
                  type="number"
                  readOnly={false}
                  {...register("mileage_to", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
              </label>
              <label className="label">
                Цена ОТ
                <input
                  className="input"
                  placeholder="Введите тип кузова"
                  type="number"
                  readOnly={false}
                  {...register("price_from", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
              </label>
              <label className="label">
                Цена ДО
                <input
                  className="input"
                  placeholder="Введите тип кузова"
                  type="number"
                  readOnly={false}
                  {...register("price_to", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
              </label>
              <div>
                {errors?.price_to && (
                  <p className="errorMessage">
                    {errors?.price_to?.message || "Что-то заполнено неверно!"}
                  </p>
                )}
              </div>
              <input className="button" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context: Context) {
  const response = await fetch(`http://localhost:3001/items`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
