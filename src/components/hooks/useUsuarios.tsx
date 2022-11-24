import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/reqRes";

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const ficRefPage = useRef(1);
    
    useEffect(() => {
        //FIC: llamar función de carga de usuarios.
        ficFnCargaUsuarios();
    }, []);
    const ficFnCargaUsuarios = async () => {
        const ficResponse = await
        //FIC: llamado de la API
        reqRespApi.get<ReqRespUsuarioListado>('/users', {
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
        return{
            usuarios,
            ficFnCargaUsuarios
        }
    }