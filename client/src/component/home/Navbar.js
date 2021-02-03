import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Axios from 'axios';
import History  from  '../../history';

import { faHome,faUsers,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Navbarr =()=> {
    const changeUrl =()=>{
        History.push("/home"); 
      
    }
const deconnexion =()=>{
    Axios.get('http://192.168.4.102:4000/deconnexion',{
       id:16,
    }).then(()=>{
        changeUrl();
        localStorage.removeItem("token");
    })
}

const nom=JSON.parse(localStorage.getItem('user'));

    return (
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand href={"/home"} className="logo">
            
            <svg x="0px" y="0px" width="30px" height="30px" viewBox="0 0 612 612" style={{fill: "#8f9dae"}}><g><g id="_x32__26_"><g><path d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25                                     c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75                                     c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125                                     S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612                                     l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z                                     M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75                                     c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"></path></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        
            <h4 style={{marginLeft:"10px",color:"#8f9dae"}}>Tchat</h4>
        
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href={"/historique" }>Historique des utilisateurs</Nav.Link>
                <Nav.Link href={"/historique2"}>historique des groupes</Nav.Link>
           
                <Nav.Link href={"/home"}><FontAwesomeIcon icon={faHome} /></Nav.Link>
                <Nav.Link href={"/gerer"}><FontAwesomeIcon icon={faUsers} /></Nav.Link>      
                <Nav.Link href={"/"} onClick={deconnexion}><FontAwesomeIcon icon={faSignOutAlt} /></Nav.Link> 
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navbarr