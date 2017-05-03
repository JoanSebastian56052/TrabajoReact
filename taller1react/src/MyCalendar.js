import React, {Component} from 'react'
import moment from 'moment'
import events from './events'

import GuardaCitas from './GuardaCitas'


import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';




BigCalendar.momentLocalizer(moment); 


class MyCalendar extends Component {
  constructor (props) {
    super(props);

    this.fechaseleccionada = this.fechaseleccionada.bind(this);
    this.guardardatos = this.guardardatos.bind(this);
    this.cambioentrada = this.cambioentrada.bind(this);

    this.state = {
      citas:[],
      events: events,
      nombrePaciente: '',
      fechaSeleccion: null,
      horaInicial: new Date(),
      horaFinal: new Date()
    }
  }

  fechaseleccionada(slotInfo){//toma lo la fecha a la que se le haga click
    this.setState({ fechaSeleccion: slotInfo,
                    horaInicial:slotInfo.start,
                    horaFinal: slotInfo.end})

    console.log(this.state);
  }

  guardardatos(e){
    e.preventDefault(); //cancela el evento si es cancelable

    var nuevoitem ={
      title: this.state.nombrePaciente,
      start: this.state.horaInicial,
      end: this.state.horaFinal
    };

    this.setState((prevState)=>({
      citas: prevState.citas.concat(nuevoitem),
      nombrePaciente: ''
    }))
    console.log(this.state.citas);
    
  }


  cambioentrada(e){
    this.setState({nombrePaciente: e.target.value})
    console.log(this.state.nombrePaciente);
  }

  seleccionevento(nada){
    console.log('no')
  }



  
  render () {
    
    var propiedades={
          fechaseleccionada:this.fechaseleccionada ,
          fechaseleccionada: this.state.fechaSeleccion,
          guardardatos: this.guardardatos.bind(this)
    }


    return (
      <div id="calendario" >

      
      <center>
      <form onSubmit={this.guardardatos}>
        <h2>Agendar Cita</h2>
          Paciente<input value={this.state.nombrePaciente} placeholder="Paciente" onChange={this.cambioentrada}/>
          doctor<input type="text" name="idDoctor" placeholder="Doctor" />

          <button>Guardar</button>
          {console.log(this.state.citas)}
        </form>
      </center>

      <BigCalendar
        {...this.props}
        style={{height: '420px'}}
        startAccessor='start'
        endAccessor='end'
        selectable={true}
        events={this.state.citas}
        onSelectSlot={(slotInfo) => this.fechaseleccionada(slotInfo)}
        onSelectEvent={(nada)=>this.seleccionevento(nada)}
        defaultView='week'
      />
      <center>
      <h3>Hora de la cita</h3>
      <p>{"hora inicio:" + this.state.horaInicial}</p>
      <p>{"hora fin:" + this.state.horaFinal}</p>
      </center>


      <h3>Listado de citas</h3>
      <GuardaCitas citas={this.state.citas}/>

      </div>
      
    );
  }
}




export default MyCalendar;



