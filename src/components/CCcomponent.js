import React, { useEffect, useState } from "react";
import "bootstrap";
import {Card,Button, Container, FormLabel} from 'react-bootstrap'
import CardComponent from "../components/cardComponent"
import logo from '../SVGFiles/small-twitter-icon-png-13.jpg';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import ComparePage from './comparePageComponent'




export  function CCcomponent()  {
    
      const [isChecked, setIsChecked] = useState(false);
      const [anos, setAnos] = useState([2022]);


      const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    
      return (
            
          <ComparePage></ComparePage>
      ); 

}