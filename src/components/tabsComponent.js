import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Button,Form,Container} from 'react-bootstrap';
import { useNavigate,useParams } from "react-router";
import {CandidateAnalisis}from '../components/CandidateAnalisis'
import  { useEffect, useState } from "react";





  
export  function TabsComponent() {

  let {candidato} = useParams()
  const [ano, setAno] = useState('');
  const [anos, setAnos] = useState([2022]);






  return (<>
  <Container style = {{marginTop:'5%', marginBottom:"10px"}}>
  <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control  onChange={(e) => setAno(e.target.value)} as='select'>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" onClick={(e)=>{
      if(ano != ''){
        let z = []


        setAnos([...anos, ano])
        }
      }} >
    submeter
  </Button>
</Form>
</Container>

    <div style={{ display: 'block', width: "100%", paddingTop: "2%" }}>
      <h2>{candidato}</h2>

      <Tabs >
       {anos.map((a,i) =>
         <Tab  eventKey={i} title={a}> <CandidateAnalisis ano={a} ></CandidateAnalisis></Tab>) }
      </Tabs>
    </div>
    </>
  );
}
