import React from 'react';
import useFetch from '../hooks/useFetch'

export const NutrialusApp = () => {

    const { loading, data } = useFetch(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`);
    const { name, phone, email, image } = !!data && data;
    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <h2>NutrialusApp</h2>
            <hr />
            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                    :
                    (< div className='blockquote text-right'>
                        <p className='mb-0'>{name}</p>
                        <br></br>
                        <footer className='blockquote-footer'>{phone}</footer>

                        <br></br>
                        <p>{email}</p>
                        <br></br>
                        <img src={image} />

                    </div>
                    )
            }

            <button onClick={refreshPage}>Siguiente</button>

        </div>

    )


}

export default NutrialusApp