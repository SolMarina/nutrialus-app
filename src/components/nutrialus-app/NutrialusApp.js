import React from 'react';
import useFetch from '../../hooks/useFetch'
import NavBar from '../navBar/NavBar';
import '../nutrialus-app/nutrialusApp.css'

export const NutrialusApp = () => {

    const { loading, data } = useFetch(`https://0q27loouph.execute-api.us-east-1.amazonaws.com/`);
    const { name, phone, email, image } = !!data && data;
    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div className='nutrialus'>
            
            <NavBar/>
            
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
                                                <th scope="row">Nombre</th>
                                                <td>{name}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Número de Teléfono</th>
                                                <td>{email}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Mail</th>
                                                <td colspan="2">{phone}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='img'>
                                    <div className='imgPaciente'>
                                        <img className='imgP' src={image} />
                                    </div>
                                    <br></br>
                                    <button onClick={refreshPage} className='btnorange'>Primary</button>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        

                    )
            }

           

        </div>

    )


}

export default NutrialusApp