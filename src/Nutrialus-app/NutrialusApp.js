import React from 'react';
import useFetch from '../Hooks/useFetch';
import NavBar from '../components/navBar/NavBar';
import './nutrialusApp.css'

export const NutrialusApp = () => {

    const { loading, data } = useFetch(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`);
    const { name, phone, email, image } = !!data && data;
    const next = () => {
        window.location.replace('https://solmarina.github.io/nutrialus-app/');

    }
    return (
        <div className='nutrialus'>
            <div className='navBar'>
                <NavBar />
            </div>

            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                    :
                    (
                        < div className='box'>

                            <div className='info'>
                                <div className='infoPersonal'>
                                    <h2>Informacion Personal</h2>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row"> <i className="bi bi-person-circle" style={{ color: '#f87113' }} ></i> Nombre</th>
                                                <td>{name}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row"><i className="bi bi-telephone-fill" style={{ color: '#f87113' }} ></i>  Número de Teléfono</th>
                                                <td>{phone}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><i className="bi bi-envelope-fill" style={{ color: '#f87113' }} ></i>  Mail</th>
                                                <td colSpan="2">{email}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='img'>
                                    <div className='imgPaciente'>
                                        <img className='imgP' src={image} />
                                    </div>
                                    <br></br>
                                    <button onClick={next} className='btnorange'>Siguiente</button>
                                </div>

                            </div>

                        </div>


                    )
            }



        </div>

    )


}
export default NutrialusApp
