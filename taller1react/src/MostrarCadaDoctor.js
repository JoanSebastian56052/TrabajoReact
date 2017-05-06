import React, { Component } from 'react';
import BotonAgregarHorario from './BotonAgregarHorario.js';

export default class MostrarCadaDoctor extends Component{
	render(){
		return(
			<tr>
				
					<td>{this.props.doctor.idDoctor} </td>
					<td>{this.props.doctor.nombre} </td>
					<td>{this.props.doctor.apellido}</td>
					<td><BotonAgregarHorario horario={this.props.doctor.idDoctor} key={this.props.doctor.idDoctor}/></td>
			</tr>
			);
	}
}