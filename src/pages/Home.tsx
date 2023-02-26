/** @format */

import React from 'react';
import { Card } from '../components/Card';
const items = [
  {
    id: '0',
    imageUrl: '/img/thenews/1.jpg',
    data: 'June 29th, 2021',
    title: "The 2020 World's Most Valuable Brands",
    subtitle:
      'Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...',
  },
  {
    id: '1',
    imageUrl: '/img/thenews/2.jpg',
    data: 'June 15th, 2021',
    title: 'The Top 100 Software Companies Of 2020',
    subtitle:
      'Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...',
  },
  {
    id: '2',
    imageUrl: '/img/thenews/3.jpg',
    data: 'June 1st, 2021',
    title: 'Healthcare updates',
    subtitle:
      'Non sed IT companies tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...',
  },
  {
    id: '3',
    imageUrl: '/img/thenews/3.jpg',
    data: 'May 28th, 2021',
    title: 'Healthcare updates',
    subtitle:
      'Non sed IT companies tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...',
  },
  {
    id: '4',
    imageUrl: '/img/thenews/4.jpg',
    data: 'May 5th, 2021',
    title: 'Business moguls',
    subtitle:
      'Non sed successful tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...',
  },
  {
    id: '5',
    imageUrl: '/img/thenews/1.jpg',
    data: 'April 30th, 2021',
    title: "The 2020 World's Most Valuable Brands",
    subtitle:
      'Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...',
  },
];
const Home: React.FC = () => {
  return (
    <main className="content">
      <div className="content__result">Results: {items.length}</div>
      <div className="content__items">
        {items.map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </main>
  );
};

export default Home;
