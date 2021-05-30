import Heading from '../components/layout/Heading';
import { useHistory, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, HOTELS_PATH } from '../utils/constants';
import Hotel from '../components/layout/Hotel';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${HOTELS_PATH}/${id}`);
        console.log(response)
        setHotel(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotel();
  }, [id]);

  return (
    <>
      <Heading title='Details' />
    </>
  );
};

export default Details;