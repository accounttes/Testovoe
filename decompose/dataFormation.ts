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
  id: number;
  image: string;
  name: string;
  price: string;
  technical_characteristics?: TechnicalInterface;
  options?: Array<OptionInterface>;
  body?: string;
  brand?: string;
  car__id?: string;
  mileage?: string;
  model?: string;
  productionYear?: string;
}

export const dataFormation = (
  data: any,
  form: boolean,
  options: Array<OptionInterface>,
  optionNames: Array<OptionNameInterface>,
): DataInterface => {
  data['id'] = Math.random().toString(16).slice(2);

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

  data['options'] = {};

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
