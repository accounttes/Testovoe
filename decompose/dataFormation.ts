import React from 'react';
import { OptionInterface } from '../components/OtherForm/OtherForm';

export interface OptionNameInterface {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface TechnicalInterface {
  body: string;
  brand: string;
  car__id: string;
  mileage: string;
  model: string;
  productionYear: string;
}

export interface DataInterface {
  contacts: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
  technical_characteristics?: TechnicalInterface;
  options?: any;
  brand?: string;
  model?: string;
  productionYear?: string;
  body?: string;
  mileage?: string;
  car__id?: string;
}

export const dataFormation = (
  data: DataInterface,
  base64: string,
  form: boolean,
  options: Array<OptionInterface>,
  optionNames: any[],
) => {
  data['id'] = Math.random().toString(16).slice(2);

  data['image'] = base64;

  if (form) {
    data['technical_characteristics'] = {
      car__id: Math.random().toString(16).slice(2),
      brand: data.brand!,
      model: data.model!,
      productionYear: data.productionYear!,
      body: data.body!,
      mileage: data.mileage!,
    };
  }

  delete data.car__id;
  delete data.brand;
  delete data.model;
  delete data.productionYear;
  delete data.body;
  delete data.mileage;

  data['options'] = Object.create({});

  options &&
    options.map((option, index) => {
      data.options[optionNames[index].title] = option.name;
    });

  for (let key in data.options) {
    if (data.options[key] === '') {
      delete data.options[key];
    }
  }

  if (Object.keys(data['options']).length == 0) {
    delete data['options'];
  }

  return data;
};
