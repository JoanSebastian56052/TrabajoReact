import React, { Component } from 'react';
import MostrarHorarioDoctores from './MostrarHorarioDoctores.js';


export default class HorarioDoctores extends Component{
	render(){
		let cadadoctor =[];
		let boton = [];
		let termino = null;

		this.props.informacion.forEach((doctor) =>{
				if(doctor.id !== termino) {
					cadadoctor.push(<MostrarHorarioDoctores doctor={doctor} key={doctor.idDoctor}/>);
					
				}
				termino = doctor.idDoctor;
			});	


		return(
				<center>{cadadoctor}</center>
			);
	}
}