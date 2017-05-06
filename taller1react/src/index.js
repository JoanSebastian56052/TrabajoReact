import BigCalendar from 'react-big-calendar';
import React from 'react';
import ReactDOM from 'react-dom';
import Paciente from './Paciente';
import Agenda from './Agenda';
import { PropTypes } from 'react';
import Doctor from './Doctor.js';


//import App from './App';
//import './index.css';



let pacientes = [
  {idPaciente: "1" , nombre: "sara", apellido: "gonzales", direccion: "cra 52 # 7 - 30 medellin", telefono: "3733630", fechaNacimiento: "19-Junio-1997", edad: "19", genero: "F"},
  {idPaciente: "2" , nombre: "victor", apellido: "zapata", direccion: "calle 2 # 3 - 22 envigado", telefono: "3723830", fechaNacimiento: "20-Febrero-1988", edad: "29", genero: "M"},
  {idPaciente: "3" , nombre: "daniel", apellido: "mejia", direccion: "calle 10 # 54 - 60 envigado", telefono: "3096403", fechaNacimiento: "18-Abril-1925", edad: "92", genero: "M"},
  {idPaciente: "4" , nombre: "carlos", apellido: "alzate", direccion: "calle 12 # 35 - 10envigado", telefono: "4442410", fechaNacimiento: "25-Agosto-1993", edad: "23", genero: "M"},
  {idPaciente: "5" , nombre: "jhonatan", apellido: "piedrahita", direccion: "calle 2-99 # 64-37 envigado", telefono: "4122410", fechaNacimiento: "04-Abril-1993", edad: "24", genero: "M"},
  {idPaciente: "6" , nombre: "wilmar", apellido: "medina", direccion: "calle 45 # 30-89 envigado", telefono: "4440080", fechaNacimiento: "05-Septiembre-1999", edad: "17", genero: "M"},
  {idPaciente: "7" , nombre: "edward", apellido: "castaño", direccion: "calle 28 # 30-87 envigado", telefono: "3728344", fechaNacimiento: "28-Febrero-1988", edad: "29", genero: "M"},
  {idPaciente: "8" , nombre: "sebastian", apellido: "correa", direccion: "calle 14 # 03-63 envigado", telefono: "5428890", fechaNacimiento: "04-Febrero-1977", edad: "40", genero: "M"},
  {idPaciente: "9" , nombre: "javier", apellido: "tavera", direccion: "calle 20 # 32-35 envigado", telefono: "3556895", fechaNacimiento: "18-Enero-1988", edad: "29", genero: "M"},
  {idPaciente: "10" , nombre: "viviana", apellido: "zapata", direccion: "calle 56 # 31-55 envigado", telefono: "3095586", fechaNacimiento: "22-Agosto-1977", edad: "40", genero: "F"}

];


let doctores = [
    {idDoctor:"1", nombre: "Daniel", apellido: "Martinez"},
    {idDoctor:"2", nombre: "Stefanny", apellido: "Toro"},
    {idDoctor:"3", nombre: "Esteban", apellido: "Posada"},
    {idDoctor:"4", nombre: "Marco", apellido: "Castañeda"},
    {idDoctor:"5", nombre: "Alejandro", apellido: "Correa"}
];

let cita = [
    {idCita:"1", paciente:"1", doctor:"", valor:30000},
    {idCita:"2", paciente:"2", doctor:"", valor:30000},
    {idCita:"3", paciente:"3", doctor:"", valor:30000},
    {idCita:"4", paciente:"4", doctor:"", valor:30000},
    {idCita:"5", paciente:"5", doctor:"", valor:30000},
    {idCita:"6", paciente:"6", doctor:"", valor:30000},
    {idCita:"7", paciente:"7", doctor:"", valor:30000},
    {idCita:"8", paciente:"8", doctor:"", valor:30000},
    {idCita:"9", paciente:"9", doctor:"", valor:30000},
    {idCita:"10", paciente:"10", doctor:"", valor:30000},
    {idCita:"11", paciente:"1", doctor:"", valor:30000},
    {idCita:"12", paciente:"2", doctor:"", valor:30000},
    {idCita:"13", paciente:"3", doctor:"", valor:30000},
    {idCita:"14", paciente:"4", doctor:"", valor:30000},
    {idCita:"15", paciente:"5", doctor:"", valor:30000},
    {idCita:"16", paciente:"6", doctor:"", valor:30000},
    {idCita:"17", paciente:"7", doctor:"", valor:30000},
    {idCita:"18", paciente:"8", doctor:"", valor:30000},
    {idCita:"19", paciente:"9", doctor:"", valor:30000},
    {idCita:"20", paciente:"10", doctor:"", valor:30000},
    {idCita:"21", paciente:"1", doctor:"", valor:30000},
    {idCita:"22", paciente:"2", doctor:"", valor:30000},
    {idCita:"23", paciente:"3", doctor:"", valor:30000},
    {idCita:"24", paciente:"4", doctor:"", valor:30000},
    {idCita:"25", paciente:"5", doctor:"", valor:30000}
];

const app = document.getElementById('app');
//ReactDOM.render(<Paciente informacion ={pacientes}/>, app);
//ReactDOM.render(<Doctor informacion ={doctores}/>, app);
ReactDOM.render(<Agenda />, document.getElementById('calen'));

//require("react-big-calendar/lib/css/react-big-calendar.css");
