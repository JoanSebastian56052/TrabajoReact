import React , {Component} from 'react';
import ListaDoctores from './ListaDoctores';
import MostrarRecaudos from './MostrarRecaudos';

export default class Recaudos extends Component {
	render(){
		let cadarecaudo = [];
		let termino = null;

		ListaDoctores.forEach((doctor) => {
			if(doctor.idDoctor !== termino) {
				cadarecaudo.push(<MostrarRecaudos doctor = {doctor} key={doctor.idDoctor}/>);
			}
			termino = doctor.idDoctor;
		});
		return(
			<div>
				<h3>RECAUDOS</h3>
				<table>
					<thead>
						<tr>
							<th>Mes</th>
							<th>Doctor</th>
							<th>Recaudo</th>
						</tr>
					</thead>
					{cadarecaudo}
				</table>
			</div>
			);
	}
}