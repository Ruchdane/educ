import React from 'react';

//ant design
import { Menu, Button, Input } from 'antd';

import './NavBar.css';
import educmod from "../../images/educmod.png";


const { Search } = Input;

const onSearch = value => console.log(value);

const { SubMenu } = Menu;



class NavBar extends React.Component {
  state = {
    current: 'abonnement',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };


  render() {
    const { current } = this.state;
    return <>
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="justify-content-center">
        <Menu.Item key="logo">
          <img src={educmod} alt="logo"></img>
        </Menu.Item>
        <SubMenu key="SubMenu" title="Explore">
            <Menu.Item key="setting:1">Correction de TDs</Menu.Item>
            <Menu.Item key="setting:2">Explication de cours</Menu.Item>
            <Menu.Item key="setting:3">Préparation aux examens</Menu.Item>
            <Menu.Item key="setting:4">Préparation aux concours</Menu.Item>
        </SubMenu>
        <Menu.Item key="abonnement">
          S'abonner
        </Menu.Item>
        
        <Menu.Item key="espace etudiant">
          Espace etudiant
        </Menu.Item>
        <Menu.Item key="connexion">
         Connexion
        </Menu.Item>
        <Menu.Item key="inscription">
          <Button type="primary">Inscrivez-vous gratuitement</Button>
        </Menu.Item>
        <div className="searchBar">
          <Menu.Item key="search_bar">
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
          </Menu.Item>
       </div>
      </Menu>
    </>;
  }
}


export default NavBar;
