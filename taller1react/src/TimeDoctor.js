import React, {Component} from 'react'
import moment from 'moment'
import events from './events'




import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';




BigCalendar.momentLocalizer(moment); 


class TimeDoctor extends Component {
  constructor (props) {
    super(props);

    this.fechaseleccionada = this.fechaseleccionada.bind(this);
    this.guardardatos = this.guardardatos.bind(this);
    this.cambioentrada = this.cambioentrada.bind(this);

    this.state = {
      horario:[],
      idDoctor: '',
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
      title: this.state.idDoctor,
      start: this.state.horaInicial,
      end: this.state.horaFinal
    };

    this.setState((prevState)=>({
      horario: prevState.horario.concat(nuevoitem)
    }))
    console.log(this.state.citas);
    
  }


  cambioentrada(e){
    this.setState({idDoctor: e.target.value})
    console.log(this.state.idDoctor);
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
        <h2>Horario Doctores</h2>
          Doctor<input value={this.state.idDoctor} placeholder="Doctor" onChange={this.cambioentrada}/>
          

          <button>Guardar</button>
          {console.log(this.state.horario)}
        </form>
      </center>
        <center>
      <h3>Horario Seleccionado</h3>
      <p>{"hora inicio:" + this.state.horaInicial}</p>
      <p>{"hora fin:" + this.state.horaFinal}</p>
      </center>

      <BigCalendar
        {...this.props}
        style={{height: '420px'}}
        startAccessor='start'
        endAccessor='end'
        selectable={true}
        events={this.state.horario}
        onSelectSlot={(slotInfo) => this.fechaseleccionada(slotInfo)}        
        defaultView='week'
        min = {new Date(2017,4,4,6,0,0)}
        max = {new Date(2017,4,4,19,0,0)}
      />
      </div>
      
    );
  }
}




export default TimeDoctor;