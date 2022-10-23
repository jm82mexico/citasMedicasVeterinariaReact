import {useState} from 'react'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] =useState('')
    const [propietario,setPropietario] = useState('')
    const [email,setEmail] = useState('')
    const [fecha,setFecha] = useState('')
    const [sintomas,setSintomas] = useState('')

    // const [error, setError] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        // * OBJECTO PACIENTE
        const objetoPaciente ={
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        console.log(objetoPaciente)
    }



  return (
    <div className='md:m-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center' >Seguimiento pacientes</h2>
        <p className='text-xl mt-5 text-center mb-10'>
            Añade Pacientes y {' '}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
            onSubmit={handleSubmit}
        >
            <div className='mb-5'>
                <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
                    Nombre Mascota
                </label>
               <input
                 id='mascota'
                 type="text"
                 placeholder='Nombre de la mascota'
                 value={nombre}
                 onChange={(e) => setNombre(e.target.value)}
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
                    Nombre del propietario
                </label>
               <input
                 id='propietario'
                 type="text"
                 placeholder='Nombre del propietario'
                 value={propietario}
                 onChange = {(e)=> setPropietario(e.target.value)}
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
                    Email
                </label>
               <input
                 id='email'
                 type="email"
                 value={email}
                 onChange = {(e)=> setEmail(e.target.value)}
                 placeholder='Email de contacto del propietario'
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
                    Alta
                </label>
               <input
                 id='alta'
                 type="date"
                 value={fecha}
                 onChange ={(e)=> setFecha(e.target.value)}                 
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                 />
            </div>
            <div className='mb-5'>
                <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
                    Sintomas
                </label>
               <textarea
                 id='sintomas'
                 type="date"
                 value={sintomas}
                 onChange = {(e)=>setSintomas(e.target.value)}
                 placeholder='Describe los sintomas'
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                 />
            </div>

            <input
              type="submit"
              className='bg-indigo-600
              w-full
              text-white
              uppercase
              font-bold
              p-3
              hover:bg-indigo-700
              cursor-pointer
              transition-color'
              value='Agregar
              paciente' />
        </form>
    </div>
  )
}

export default Formulario