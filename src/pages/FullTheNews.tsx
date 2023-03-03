/** @format */

import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullTheNews: React.FC = () => {
  const [theNews, setTheNews] = React.useState<{
    imageUrl: string;
    title: string;
    subtitle: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchTheNews() {
      try {
        const { data } = await axios.get('https://63fb33547a045e192b64af82.mockapi.io/items/' + id);
        setTheNews(data);
      } catch {
        alert('Mistake when receiving data a thenews');
        navigate('/react-thenews/');
      }
    }
    fetchTheNews();
  }, []);
  if (!theNews) {
    return <div className="wrapper">Loading...</div>;
  }
  return (
    <div className="wrapper">
      <main className="thenews">
        <img className="thenews__image" src={`../${theNews.imageUrl}`} alt="ImgNews" />
        <div className="thenews__container">
          <div className="thenews__info">
            <div className="thenews__title">{theNews.title}</div>
            <div className="thenews__subtitle">{theNews.subtitle}</div>
          </div>
          <button className="thenews__btn">
            <Link key={id} to="/react-thenews/">
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
              Back to homepage
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default FullTheNews;
