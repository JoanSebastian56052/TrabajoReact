import React from 'react'
import Agenda from './Agenda';
import Consulta from './Consulta';
import Paciente from './Paciente';
import Doctor from './Doctor';
import App from './App';
import Recaudos from './Recaudos'
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
      	<li><Link to="/">Inicio</Link></li>
      	<li><Link to="/pacientes">Pacientes</Link></li>
      	<li><Link to="/doctores">Doctores</Link></li>
        <li><Link to="/citas_agendadas">Agenda Citas</Link></li>
        <li><Link to="/consulta">Consulta</Link></li>
        <li><Link to="/horario_doctores">Horario Doctores</Link></li>
        <li><Link to="/recaudado_mes">recaudado por mes</Link></li>


        
      </ul>

      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/pacientes" component={Paciente}/>
      <Route path="/doctores" component={Doctor}/>
      <Route exact path="/citas_agendadas" component={Agenda}/>
      <Route path="/consulta" component={Consulta}/>
      <Route path="/horario_doctores" component={HorarioDoctores}/>
      <Route path="/recaudado_mes" component={Recaudos}/>
    </div>
  </Router>
)
export default BasicExample
