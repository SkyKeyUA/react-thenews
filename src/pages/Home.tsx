/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { selectTheNewsData } from '../redux/thenews/selectors';
import { TheNews } from '../redux/thenews/type';
import axios from 'axios';

const Home: React.FC = () => {
  //const { items } = useSelector(selectTheNewsData);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://63fb33547a045e192b64af82.mockapi.io/items');
        setItems(itemsResponse.data);
      } catch (error) {
        alert('error when requesting data');
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(items);
  return (
    <main className="content">
      <div className="content__result">Results: {items.length}</div>
      <div className="content__items">
        {items.map((obj: any) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </main>
  );
};

export default Home;
