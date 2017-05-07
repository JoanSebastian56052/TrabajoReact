import React, { Component } from 'react';
import ListaPacientes from './ListaPacientes';
import ListaCitas from './ListaCitas';
import HistoriasClinicas from './HistoriasClinicas';



export default class Consulta extends Component{
	constructor(props){
		super(props);
		this.state ={
			codigoCita: " ",
			valor: null,
			doctor: " ",
			nombrePaciente: " ",
			apellidoPaciente: " ",
			direccionPaciente: " ",
			telefonoPaciente: " ",
			edadPaciente: " ",
			antecedentes: ""

		}

		this.tomaValor = this.tomaValor.bind(this);
		this.buscarCita = this.buscarCita.bind(this);
	}
	

	tomaValor(e){

		this.setState({codigoCita: e.target.value})
		console.log(this.state.codigoCita);

	}


	buscarCita(){
		this.setState({codigoCita: " "});
		console.log(this.state.codigoCita)
		let boton = [];
		let termino = null;
		ListaCitas.forEach((cita) =>{
				if(cita.idCita !== termino && cita.idCita ==this.state.codigoCita) {
					console.log("La cita existe");

					this.setState({valor: cita.valor , doctor: cita.doctor});

					
					ListaPacientes.forEach((paciente)=>{
						if(paciente.idPaciente== cita.paciente){
							this.setState({nombrePaciente: paciente.nombre ,
							               apellidoPaciente: paciente.apellido,
							               direccionPaciente: paciente.direccion,
							               telefonoPaciente: paciente.telefono,
							               edadPaciente: paciente.edad
							           });
						}
					});

					HistoriasClinicas.forEach((historia)=>{
						if(historia.idPaciente== cita.paciente){
							this.setState({antecedentes: historia.Antecedentes});
						}
					});


					}
					termino = cita.idCita;
				});
			
				
			}
		

	render(){
		
		return(
			<div>
			<center>
			 {this.state.codigoCita}
			Codigo de la cita<input type="text"  placeholder="Codigo cita" onChange={this.tomaValor} onFocus={this.value=""}/>
			<input type="button" value="Buscar" onClick={this.buscarCita}/>
			<p>
				{this.state.doctor + " "}
				{this.state.valor}
				{this.state.nombrePaciente}
				{this.state.apellidoPaciente}
				direccion
				{this.state.direccionPaciente}
				telefono
				{this.state.telefonoPaciente}
				Edad
				{this.state.edadPaciente}


			</p>
			<p>{"Antecedentes: " + this.state.antecedentes}</p>


			<input type="text" placeholder="Diagnostico" />
			<input type="button" value="Guardar y cobrar" />
			</center>
			</div> 
			);
	}

}