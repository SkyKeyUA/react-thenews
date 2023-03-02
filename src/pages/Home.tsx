/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { selectTheNewsData } from '../redux/thenews/selectors';
import { fetchTheNews } from '../redux/thenews/asyncActions';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { Skeleton } from '../components/Card/Skeleton';

const Home: React.FC = () => {
  const { items, status } = useSelector(selectTheNewsData);
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(selectFilter);
  React.useEffect(() => {
    dispatch(fetchTheNews());
  }, [dispatch]);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <main className="content">
      <div className="content__result">Results: {items.length}</div>
      <div className="content__items">
        {status === 'loading'
          ? skeletons
          : items
              .filter((obj) => {
                return (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                  obj.subtitle.toLowerCase().includes(searchValue.toLowerCase())
                );
              })
              .map((obj: any) => <Card key={obj.id} {...obj} />)}
      </div>
    </main>
  );
};

export default Home;
