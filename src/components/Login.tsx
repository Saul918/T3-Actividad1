import { useEffect, useReducer } from "react"

export const Login = () => {

//const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
const [state, dispatch] = useReducer(authReducer, initialState)
   
useEffect(() => {
    setTimeout(() => {
      dispatch({type:'logout'}) 
    }, 2500);
}, []);
//FIC: si se agregara una dependencia 
if (state.validando) {
    return (
    <>
        <h3>Login</h3>
            <div className="ficAlertInfo_Div">
                Validando Información...
            </div>   
    </>
    )
}
return (
    <>
        <h3>Login</h3>
        {
        (  state.token  )
            ? 
            (
                <div className="ficAlertSuccess_Div">
                    Autenticado como: { state.nombre }
                </div>
            )
            : 
            (   
                <div className="ficAlertDanger_Div">
                    No Autenticado...
                </div>
            )
        }
        {
            ( state.token )
            ? ( 
                <button
                    className="ficLogout_Button"
                >
                    Logout   
                </button> 
            )
            : (   
                <button
                    className="ficLogin_Button"
                >
                    Login   
                </button>   
            )
        }           
    </>
)
}

    interface AuthState {
        validando: boolean,
        token: string | null,
        username: string,
        nombre: string,
    }
    
    const initialState: AuthState = {
        validando: true,
        token: null,
        username: '',
        nombre: ''
    }
    
    type AuthAction = { type: 'logout'}
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    username: '',
                    nombre: ''
                }
                break;
            default:
                return state;
                break;
        }
    }

