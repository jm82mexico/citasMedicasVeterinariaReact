import React from 'react'

const Formulario = () => {
  return (
    <div className='md:m-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center' >Seguimiento pacientes</h2>
        <p className='text-xl mt-5 text-center mb-10'>
            Añade Pacientes y {' '}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
    </div>
  )
}

export default Formulario