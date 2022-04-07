import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Container, Breadcrumb, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../store/actions/items";
import A from "../components/A";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTypedSelector } from "../store/hooks/useTypesSelector";
import { ItemsState } from "../types/items";
import { ItemInterface } from "./delete";
import { Context } from "next-redux-wrapper";
import axios from "axios";
import { DataInterface } from "../decompose/dataFormation";

const Home: NextPage = ({ users }): React.ReactElement => {
  const axios = require("axios").default;
  const items = useTypedSelector((state: ItemsState) => state.users.items);
  const dispatch = useDispatch();
  console.log(users, "users");

  if (items.length < 10) {
    dispatch(setItems(users));
  } else {
    dispatch(setItems(items));
  }

  return (
    <>
      <Head>
        <meta></meta>
        <title>Главная страница</title>
      </Head>

      <Container>
        <Breadcrumb className="navbar">
          <A href={"/"} text={"Главная"}></A>
          <A href={"/create"} text={"Создать"}></A>
          <A href={"/update"} text={"Найти"}></A>
          <A href={"/delete"} text={"Удалить"}></A>
          <A href={"/view"} text={"Смотреть пользователей"}></A>
          <A href={"/list"} text={"Список"}></A>
          <A href={"/search"} text={"Конкретный контакт"}></A>
        </Breadcrumb>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1596796266529-04400e7077f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Вы можете посмотреть список пользователей</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1596463152524-ca392d510adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Вы можете посмотреть добавить пользователя</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1596463621264-26fa44b7a2bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Вы можете найти определенного пользователя</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export async function getStaticProps(context: Context) {
  const response = await fetch(`http://localhost:3001/items`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}

export default Home;
