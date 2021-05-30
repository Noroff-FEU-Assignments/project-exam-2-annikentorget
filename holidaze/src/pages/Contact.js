import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { BASE_URL, CONTACT_PATH } from '../utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../utils/schemas';
import axios from 'axios';

const Contact = () => {
    const [contact, setContact] = useState(null);
    const { id } = useParams();

    const [submitting, setSubmitting] = useState(false)
    const [postError, setPostError] = useState(null)
    const [success, setSuccess] = useState(null);

     const { register, handleSubmit, errors } = useForm({
       resolver: yupResolver(productSchema)
    });

    const onSubmit = async data => {
        setSubmitting(true);
        setPostError(null);
        console.log(data);
        try {
            const response = await axios.post(`${BASE_URL}${CONTACT_PATH}`, data)
            console.log(response)
            setContact(response.data)
            setSuccess(true)
        } catch (error) {
            console.log('error', error)
            setPostError(error.toString())
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <h2>Contact form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {postError && <p>{postError}</p>}
                <fieldset disabled={submitting}>
                    <div>
                        <input
                            name='name'
                            placeholder='First name'
                            ref={register}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>

                    <div>
                        <input
                            name='lastname'
                            placeholder='Last name'
                            ref={register}
                        />
                        {errors.price && <p>{errors.price.message}</p>}
                    </div>
                    <div>
                        <textarea
                            name='description'
                            placeholder='Description'
                            ref={register}
                            type='text'
                        />
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>
                    <div>
                        <input
                            name='image_url'
                            placeholder='Image URL'
                            ref={register}
                            type='text'
                        />
                        {errors.image_url && <p>{errors.image_url.message}</p>}
                    </div>

                    <button type='submit'>
                        {submitting ? 'Adding ...' : 'Send'}
                    </button>
                </fieldset>
            </form>
        </>
    );
};

export default Contact;