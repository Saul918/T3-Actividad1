import React from 'react'
export const TiposBasicos = () => {
let FicIdNombre: string | number = "Juan";
FicIdNombre = 1012;
const FicNombre: string = "Juan Ramon";
const FicApellidos: string = "Martinez Muñoz"
const FicNumControl: number = 1012;
const FicNumControl2 = 1740;
const FicFechaReg: Date =  new Date();
let FicExperiencia = 20;
let FicActivo: boolean = true;
FicExperiencia = 25;
let FicPasatiempos = [];
FicPasatiempos.push(1012);
FicPasatiempos.push(true);
FicPasatiempos.push("Programacion en react")
    return (
        <>
          <h3>Tipos Básicos</h3> 
          ID: {FicIdNombre}, <br></br>
          Nombre: {FicNombre}, <br></br>
          Apellidos: {FicApellidos}, <br></br>
          Nro. Control ultimos digitos: {FicNumControl}, <br></br>
          Nro. Control primeros digitos:{FicNumControl2}, <br></br>
          Fecha de registro: {FicFechaReg.toString()}, <br></br>
          Exp: {FicExperiencia}, <br></br>
          {(FicActivo) ? 'Activo' : 'No Activo'}
          Estatus: {(FicActivo) ? 'Activo' : 'No Activo'}, <br></br>
          Pasatiempos: {FicPasatiempos[0]}, 
                  {(FicPasatiempos[1]) ? 'Activo' : 'No Activo'},
                  Pasatiempo: {FicPasatiempos[2]}
        </>
    )
}