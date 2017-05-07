import React from 'react'
import Agenda from './Agenda';
import Consulta from './Consulta';
import Paciente from './Paciente';
import Doctor from './Doctor';
import HorarioDoctores from './HorarioDoctores';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Agenda</Link></li>
        <li><Link to="/consulta">Consulta</Link></li>
        <li><Link to="/pacientes">Pacientes</Link></li>
        <li><Link to="/doctores">Doctores</Link></li>
        <li><Link to="/horario_doctores">Horario Doctores</Link></li>


        
      </ul>

      <hr/>

      <Route exact path="/" component={Agenda}/>
      <Route path="/consulta" component={Consulta}/>
      <Route path="/pacientes" component={Paciente}/>
      <Route path="/doctores" component={Doctor}/>
      <Route path="/horario_doctores" component={HorarioDoctores}/>
    </div>
  </Router>
)
export default BasicExample
