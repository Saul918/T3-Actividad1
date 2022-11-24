import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const ficRefPage = useRef(1);
    useEffect(() => {
        //FIC: llamado de la API
        ficFnCargaUsuarios();
        reqRespApi.get<ReqRespUsuarioListado>('/users')
        .then(resp=> {
                //console.log(resp);
                //console.log(resp.data);
                //console.log(resp.data.data);
                //console.log(resp.data.data[0].first_name);
                //console.log(resp.data.data[0].email)
                setUsuarios(resp.data.data);
        })
        .catch(err => console.log(err))
        }, [])

        const ficFnCargaUsuarios = async () => {
            const ficResponse = await
            //FIC: llamado de la API
            reqRespApi.get<ReqRespUsuarioListado>('/users',{
                params: {
                    page: ficRefPage.current
                }
            })

            .then(resp=> {
                //console.log(resp);   
                //console.log(resp.data);
                //console.log(resp.data.data);
                //console.log(resp.data.data[0].first_name);
                //console.log(resp.data.data);
                if ( resp.data.data.length > 0 ) {
                    setUsuarios(resp.data.data);
                    ficRefPage.current ++;
                }
                else {
                    alert('No hay mas registros');
                }
            })
            .catch(err => console.log(err))
        }
        
        const renderItem = (usuario: Usuario) => {
            return (
                <tr key={usuario.id.toString()}>
                    <td>
                    <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    >
                    </img>
                    </td>
                    <td>
                        { usuario.first_name } { usuario.last_name }
                    </td>
                    <td>
                        { usuario.email }
                    </td>
                </tr>
            )
        }

    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {
                     usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
                      }
                </tbody>
            </table>
            <button
                    className="ficFnCargaUsuarios"
                >
                    Siguiente   
                </button>
        </>
    )
}