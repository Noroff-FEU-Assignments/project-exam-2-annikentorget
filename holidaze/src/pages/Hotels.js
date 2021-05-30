import Heading from '../components/layout/Heading';
import { useHistory, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, HOTELS_PATH } from '../utils/constants';
import Hotel from '../components/layout/Hotel';

const Hotels = () => {
  const [hotels, setHotels] = useState(null);
  const [render, setRender] = useState();

  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${HOTELS_PATH}`);
        console.log(response)
        setHotels(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotels();
  }, []);

  if (!hotels) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Heading title='Hotels' />

      {hotels.map(hotel => {
        return (
          <>
            <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
              <Hotel {...hotel} />
            </Link>
          </>
        );
      })}
    </>
  );
};



export default Hotels;