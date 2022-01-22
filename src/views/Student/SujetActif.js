import React from 'react';
import { Table, Card, } from 'antd';
import {BarsOutlined} from '@ant-design/icons'
import './Student.css'
const columns = [
	{
		title: "Sujét",
		dataIndex: "auteur",
		render: auteur => <div class="row">
			<div class="col-2">
				<BarsOutlined style={{fontSize: '2rem'}}/>
			</div>
			<div class="col">{auteur.titre} <br />
				Par <span class="fw-bold text-warning">{auteur.nom}</span> <br />
				{auteur.date}</div>
		</div>
	},
	{
		title: "Réponses",
		dataIndex: "reponses",
		render: reponses => reponses + " reponses"
	},
	{
		title: "Vues",
		dataIndex: "vues",
		render: vues => vues + " vues"
	},
	{
		title: "Dernier messages",
		dataIndex: "dernier",
		render: dernier => <> Par <span class="fw-bold text-warning">{dernier.nom}</span><br />{dernier.date}</>
	}
]
const dataSource = Array.from(Array(10), (a,e) => {
	return {
		reponses: 4,
		vues: 50,
		auteur: {
			titre: "Derive d'une fonction",
			nom: `Michael ${e}`,
			date: "Aujourd'hui,21:30",
		},
		dernier: {
			nom: "Didier",
			date: "Hier,15:30",
		}
	}
})
class MessagesNonLues extends React.Component {
	render() {
		return <>
			<Card >
				<Table columns={columns} dataSource={dataSource} pagination={{
					pageSize:4
				}}/>
			</Card>
		</>

	}
}
export default MessagesNonLues