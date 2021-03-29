import React from 'react';
import useFetch from '../Hooks/useFetch'
import NavBar from '../components/navBar/NavBar'
import './nutrialusApp.css'
import 'bootstrap-icons/font/bootstrap-icons';


export const NutrialusApp = () => {

    const { loading, data } = useFetch(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`);
    const { name, phone, email, image } = !!data && data;
    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div className='nutrialus'>
            <div className='navBar'>
                <NavBar/>
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
                                                <th scope="row"> <i class="bi bi-person-circle"></i> Nombre</th>
                                                <td>{name}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row"><i class="bi bi-telephone-fill"></i>  Número de Teléfono</th>
                                                <td>{phone}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row"><i class="bi bi-envelope-fill"></i>  Mail</th>
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
                                    <button onClick={refreshPage} className='btnorange'>Siguiente</button>
                                </div>

                            </div>

                        </div>


                    )
            }



        </div>

    )


}

export default NutrialusApp