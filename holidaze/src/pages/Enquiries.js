import Heading from '../components/layout/Heading';
import { useHistory, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, CONTACT_PATH } from '../utils/constants';
import Hotel from '../components/layout/Hotel';

const Enquiries = () => {
  const [contact, setContact] = useState(null);
  const [render, setRender] = useState();

  useEffect(() => {
    const getContact = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${CONTACT_PATH}`);
        console.log(response)
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  if (!contact) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Heading title='Contact' />

      {contact.map(contact => {
        return (
          <>
            <div key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.lastname}</p>
                <p>{contact.email}</p>
                <p>{contact.message}</p>
            </div>
          </>
        );
      })}
    </>
  );
};



export default Enquiries;