/** @format */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilter } from '../../redux/filter/selectors';
import { TheNews } from '../../redux/thenews/type';
import { Highlight } from '../Highlight';
import styles from './Card.module.scss';

export const Card: React.FC<TheNews> = ({ id, imageUrl, time, title, subtitle }) => {
  const { searchValue } = useSelector(selectFilter);
  const light = React.useCallback(
    (str: string) => {
      return <Highlight str={str} />;
    },
    [searchValue],
  );
  return (
    <div className={styles['content__card']}>
      <Link key={id} to={`/react-thenews/thenews/${id}`}>
        <img src={imageUrl} alt="ImgNews" className={styles['content__image']} />
      </Link>
      <div className={styles['content__data']}>
        <Link key={id} to={`/react-thenews/thenews/${id}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.99998 3.16675C2.80336 3.16675 1.83331 4.1368 1.83331 5.33341V12.0001C1.83331 13.1967 2.80336 14.1667 3.99998 14.1667H12C13.1966 14.1667 14.1666 13.1967 14.1666 12.0001V5.33341C14.1666 4.1368 13.1966 3.16675 12 3.16675H3.99998ZM0.833313 5.33341C0.833313 3.58451 2.25108 2.16675 3.99998 2.16675H12C13.7489 2.16675 15.1666 3.58451 15.1666 5.33341V12.0001C15.1666 13.749 13.7489 15.1667 12 15.1667H3.99998C2.25108 15.1667 0.833313 13.749 0.833313 12.0001V5.33341Z"
              fill="#575757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.33331 0.833374C5.60946 0.833374 5.83331 1.05723 5.83331 1.33337V4.00004C5.83331 4.27618 5.60946 4.50004 5.33331 4.50004C5.05717 4.50004 4.83331 4.27618 4.83331 4.00004V1.33337C4.83331 1.05723 5.05717 0.833374 5.33331 0.833374Z"
              fill="#575757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6666 0.833374C10.9428 0.833374 11.1666 1.05723 11.1666 1.33337V4.00004C11.1666 4.27618 10.9428 4.50004 10.6666 4.50004C10.3905 4.50004 10.1666 4.27618 10.1666 4.00004V1.33337C10.1666 1.05723 10.3905 0.833374 10.6666 0.833374Z"
              fill="#575757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.833313 6.66675C0.833313 6.39061 1.05717 6.16675 1.33331 6.16675H14.6666C14.9428 6.16675 15.1666 6.39061 15.1666 6.66675C15.1666 6.94289 14.9428 7.16675 14.6666 7.16675H1.33331C1.05717 7.16675 0.833313 6.94289 0.833313 6.66675Z"
              fill="#575757"
            />
          </svg>
          {time}
        </Link>
      </div>
      <div className={styles['content__title']}>
        <Link key={id} to={`/react-thenews/thenews/${id}`}>
          {light(title)}
        </Link>
      </div>
      <div className={styles['content__subtitle']}>
        <Link key={id} to={`/react-thenews/thenews/${id}`}>
          {light(subtitle.length > 100 ? `${subtitle.slice(0, 100)}...` : subtitle)}
        </Link>
      </div>
      <button className={styles['content__btn']}>
        <Link key={id} to={`/react-thenews/thenews/${id}`}>
          Read more
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z"
              fill="#363636"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
};
