import React, { useEffect, useState } from "react";
import "bootstrap";
import {Card,Button, Container} from 'react-bootstrap'
import CardComponent from "../components/cardComponent"
import logo from '../SVGFiles/small-twitter-icon-png-13.jpg';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';




export default class ContentComponent extends React.Component {
    
    render() {
      return (<> <p></p> <p></p>
      <CardComponent></CardComponent>
      </>)  
    }

}