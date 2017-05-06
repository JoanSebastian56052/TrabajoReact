import React, { Component } from 'react';
import MostrarCadaDoctor from './MostrarCadaDoctor.js';


export default class doctor extends Component{
	render(){
		let cadadoctor =[];
		let boton = [];
		let termino = null;

		this.props.informacion.forEach((doctor) =>{
				if(doctor.id !== termino) {
					cadadoctor.push(<MostrarCadaDoctor doctor={doctor} key={doctor.idDoctor}/>);
					
				}
				termino = doctor.idDoctor;
			});	


		return(
				<div><h3>DOCTORES</h3>
				<table>
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Horario</th>
						</tr>
					</thead>
					<tbody>
						{cadadoctor}
					</tbody>
				</table>
				</div>
			);
	}
}