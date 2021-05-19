import { useEffect } from 'react';
import { BASE_URL, HOTELS_PATH } from '../utils/constants';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios
      .get(`${BASE_URL}${HOTELS_PATH}`)
      .then(response => console.log(response));
  }, []);
  return (
    <>
      <div className="banner">
      </div>
      

    </>
  );
};

export default Home;