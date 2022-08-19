import React, { useEffect, useState } from "react";
import "bootstrap";
import {Navbar,Nav,Container,NavDropdown,Figure} from 'react-bootstrap'
import logo from '../SVGFiles/small-twitter-icon-png-13.jpg';
import { Link } from "react-router-dom";




export default class NavbarComponent extends React.Component {
    
    
    
    render() {
      return (<Navbar bg="dark" variant="dark" style={{height:"60px"}}>
      <Container className="col-md-8">
        <Link to ='/' style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home">
        <Figure className="d-inline-block align-center" margin = {10} padding = {5}
         height={50}><Figure.Image width={50} height={50} alt="20x20" src={logo} /></Figure>
           Classificador de sentimentos 
        </Navbar.Brand>
        </Link>
        
      </Container>

      <Container style={{alignContent:'center'}} className="col-md-4">
      <Link to ='/' style={{color:'white',textDecoration:'none', margin:0, padding:0}}>
        Selecionar candidato
      </Link>
      |
      <Link to ='/compararCandidatos' style={{color:'white',textDecoration:'none', margin:0, padding:0}}>
        Comparar candidatos
      </Link>
      </Container>

    </Navbar>)

        
      
    }

}