/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { selectTheNewsData } from '../redux/thenews/selectors';
import { fetchTheNews } from '../redux/thenews/asyncActions';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';

const Home: React.FC = () => {
  const { items } = useSelector(selectTheNewsData);
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(selectFilter);
  React.useEffect(() => {
    dispatch(fetchTheNews());
  }, [dispatch]);
  console.log(items);
  return (
    <main className="content">
      <div className="content__result">Results: {items.length}</div>
      <div className="content__items">
        {items
          .filter((obj) => {
            return (
              obj.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              obj.subtitle.toLowerCase().includes(searchValue.toLowerCase())
            );
          })
          .map((obj: any) => (
            <Card key={obj.id} {...obj} />
          ))}
      </div>
    </main>
  );
};

export default Home;
