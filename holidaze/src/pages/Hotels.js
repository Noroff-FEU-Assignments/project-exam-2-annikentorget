import Heading from '../components/layout/Heading';
import { useHistory, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';
import { HOTELS_PATH } from '../utils/constants';
import Hotel from '../components/layout/Hotel';

const Hotels = () => {
  const [auth] = useContext(AuthContext);
  const history = useHistory();
  const [products, setHotels] = useState(null);
  const [render, setRender] = useState();
  const http = useAxios();

  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await http.get(HOTELS_PATH);
        console.log(response)
        setHotels(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotels();
  }, []);

  const deleteHotel = async (id, hotelTitle) => {
    try {
      const response = await http.delete(`${HOTELS_PATH}/${id}`);
      console.log(response);
      alert(`${hotelTitle} has been deleted.`);
    } catch (error) {
      console.log(error);
    } finally {
      setRender(render + 1);
    }
  };

//  if(!auth) {
//  history.push('/login');
//  }

  if (!products) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Heading title='Hotels' />

      {Hotels.map(hotel => {
        return (
          <>
            <Link key={hotel.id} to={`/edit/${hotel.id}`}>
              <Hotel {...hotel} />
            </Link>
          </>
        );
      })}
    </>
  );
};



export default Hotels;