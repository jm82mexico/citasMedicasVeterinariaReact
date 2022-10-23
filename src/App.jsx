import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const storage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const[pacientes, setPacientes]=useState(storage);
  const [paciente, setPaciente] = useState({})
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])
  
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPacientes = {setPacientes}
        />
      </div>
    </div>
  )
}

export default App
