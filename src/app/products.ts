export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  img_url: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'технология NFC: Дацвет: золотистыйтип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-zolotistyi-102298726/?c=750000000#!/item',
    img_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h34/46393533235230/apple-iphone-13-pro-256gb-zolotistyj-102298726-1-Container.jpg'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    url: '',
    img_url: ''
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    url: '',
    img_url: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/