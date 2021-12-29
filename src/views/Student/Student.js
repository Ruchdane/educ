import React from 'react';
// import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Typography, Badge } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faComment, faCommentAlt, faCommentSlash, faBell, faBookReader/*, faBook, faCog*/ } from '@fortawesome/free-solid-svg-icons';

import MessagesNonLues from './MessagesNonLues';
import MessagesSansReponse from './MessagesSansReponse';
import SujetActif from './SujetActif';
import './Student.css'
const { Title } = Typography;
const { Content, Sider } = Layout;
const Tabs = [
	{
		nom: "Repondre a un message",
		View: SujetActif,
		title: <>Repondre a un message</>,
		icon: faEdit
	},
	{
		nom: "Sujet Actif",
		View: SujetActif,
		title: <>Sujets Actif <Badge count="3" className="mx-auto"  ></Badge></>,
		icon: faCommentAlt
	},
	{
		nom: "Messages Non Lues",
		View: MessagesNonLues,
		title: <>Messages non lues <Badge count="3" className="mx-auto"  ></Badge></>,
		icon: faCommentSlash
	},
	{
		nom: "Messages sans réponsee",
		View: MessagesSansReponse,
		title: <>Messages sans réponsee <Badge count="3" className="mx-auto"  ></Badge></>,
		icon: faComment
	},
	{
		nom: "Notifications",
		View: SujetActif,
		title: <>Notifications</>,
		icon: faBell
	},
	{
		nom: "Mes cours",
		View: SujetActif,
		title: <>Mes cours</>,
		icon: faBookReader
	},
	// {
	// 	nom: "Resources",
	// 	view: SujetActif,
	// 	title: <>Resources</>,
	// 	icon: faBook
	// },
	// {
	// 	nom: "Parametres",
	// 	View: SujetActif,
	// 	title: <>Parametres</>,
	// 	icon: faCog
	// }
]
class StudentDashBoard extends React.Component {
	state = {
		collapsed: false,
		Current: Tabs[0]
	};
	onCollapse = collapsed => {
		this.setState({ collapsed});
	};
	setSelectedMenuItem(index){
		var Current =Tabs[index];
		this.setState({Current})
	}

	render() {
		const { collapsed,Current } = this.state;
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider breakpoint="md" width="250" collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
					<Menu theme="dark"   className="sticky" defaultSelectedKeys={[0]} mode="inline" onClick={(e)=> this.setSelectedMenuItem(e.key)}>
						{!collapsed ? <Title className="text-light py-4 px-5" level={4}>
							Dashboard Etudiant
						</Title> : null}
						
						{Tabs.map((tab, index) =>
							<Menu.Item key={index} icon={<FontAwesomeIcon icon={tab.icon} />}>
								{tab.title}
								{/* <Link to={"/students/"+tab.nom}/> */}
							</Menu.Item>)}
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Content>
						<Breadcrumb className="px-4 py-2 breadcrumb bg-purple">
							<Breadcrumb.Item className="text-light fw-bolder">Dashboard</Breadcrumb.Item>
							<Breadcrumb.Item className="text-light fw-bolder" >{Current.nom}</Breadcrumb.Item>
						</Breadcrumb>
						<Current.View/>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default StudentDashBoard