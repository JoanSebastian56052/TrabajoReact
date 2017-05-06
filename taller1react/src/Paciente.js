import React, { Component } from 'react';
import MostrarCadaPaciente from './MostrarCadaPaciente';


export default class paciente extends Component{
	render(){
		let cadapaciente =[];
		let boton = [];
		let termino = null;

		this.props.informacion.forEach((paciente) =>{
				if(paciente.id !== termino) {
					cadapaciente.push(<MostrarCadaPaciente paciente={paciente} key={paciente.idPaciente}/>);
					
				}
				termino = paciente.idPaciente;
			});	


		return(
				<div><h3>PACIENTES</h3>
				<table>
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Direccion</th>
							<th>Telefono</th>
							<th>Fecha de Nacimiento</th>
							<th>Edad</th>
							<th>Genero</th>
						</tr>
					</thead>
					<tbody>
						{cadapaciente}
					</tbody>
				</table>
				</div>
			);
	}
}