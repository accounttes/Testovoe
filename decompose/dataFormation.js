import React from 'react';

export const dataFormation = (data, form, options, optionNames) => {
  data['id'] = Math.random().toString(16).slice(2);

  if (form) {
    data['technical_characteristics'] = {
      car__id: Math.random().toString(16).slice(2),
      brand: data.brand,
      model: data.model,
      productionYear: data.productionYear,
      body: data.body,
      mileage: data.mileage,
    };
  }

  delete data.car__id;
  delete data.brand;
  delete data.model;
  delete data.productionYear;
  delete data.body;
  delete data.mileage;

  data['options'] = {};

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
