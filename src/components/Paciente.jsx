import React from 'react'

const Paciente = ({paciente}) => {
   
    const{nombre,propietario,email,fecha,sintomas,id} = paciente
    console.log(nombre);
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 rounded-xl'>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case pl-1">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case pl-1">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case pl-1">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
            <span className="font-normal normal-case pl-1">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case pl-1">{sintomas}</span>
        </p>
        


    </div>
  )
}

export default Paciente