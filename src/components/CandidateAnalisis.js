import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate,useParams } from "react-router";
import { Chart , ArcElement, Tooltip, Legend ,CategoryScale,
  LinearScale,
  BarElement,PointElement,
  LineElement,
  Title, } from 'chart.js';
import { Pie,Bar,Line } from 'react-chartjs-2';
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';



Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);




export  function CandidateAnalisis(ano) {

let [user, setUser] = useState({});
const us = useNavigate()
let {candidato} = useParams()


useEffect(() => {
  let url = "/users?candidato="+ candidato +"&&ano="+ ano.ano
  console.log(url)
  api
    .get('https://sentimentclassierapi.herokuapp.com'+url)
    .then((response) => {
       var json = response.data 
       let keys=Object.keys(json)[0]
       var jo = (json[keys])

       jo.bymoutP = [0,0,0,0,0,0,0,0,0,0,0,0]
       jo.bymoutN = [0,0,0,0,0,0,0,0,0,0,0,0]
       jo.bymoutZ = [0,0,0,0,0,0,0,0,0,0,0,0]
      let total = 0
      let negativos = 0
      let positivos = 0
      let neutro = 0

       for(let i =0; i< jo.tweets.length; i++){
       total +=1

       let x = jo.timestamp[i]
       let z = x.split("-")[1]
       let pol = jo.polaridade[i]
     
       
       if(pol == 1){
         jo.bymoutP[parseInt(z) -1] += 1
         positivos += 1
       }

       else if(pol == -1){
        jo.bymoutN[parseInt(z) -1] += 1
        negativos += 1
      }

      else{
        jo.bymoutZ[parseInt(z)-1] += 1
        neutro += 1
      }
      
       }
     
       
       setUser((previous)=>{
        return {"positivos" : positivos, 
        "negativos" : negativos, 
        "neutro" : neutro,
        "polaridade" : jo.polaridade,
        "timestamp": jo.timestamp,
        "total" : total,
        "tweets" :jo.tweets,
        "bymoutP":jo.bymoutP,
        "bymoutN":jo.bymoutN,
        "bymoutZ":jo.bymoutZ
      }
      
       })
       
    })
    .catch((err) => {
      console.log(err);
    });
}, [])




  const data = {
    labels: ['Positivos', 'Negativos', 'Neutros'],
    datasets: [
      {
        label: 'Sentimentos sobre ' + candidato,
        data: [user.positivos,user.negativos,user.neutro],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  

  const data3 = {
    labels :  ['janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro ',
    'dezembro'],
    datasets: [
      {
        label: 'Popularidade',
        data: user.bymoutP,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  



 



   const data2 = {
    labels : ['janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro ',
    'dezembro'],

    datasets: [
      {
        label: 'Positivos',
        data: user.bymoutP,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negativos',
          data: user.bymoutN,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

        
        
        
        return ( <>

          
         
     <Container>
     
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          gap: "40px",
          marginTop: "30px",
          marginBottom:"30px",
        }}  className="col-md-8" >


          

        <Bar width={300} height={300} data={data2} />
        <Line width={300} height={300} data={data3} />
        <Pie width={200} height={100} data={data} />


        </div>
        
      </Container>  
      <MDBCard className='h-100'  >
          <MDBCardBody style={{height:'600px',overflow:'auto'}}>
            <MDBCardTitle>Tweets avaliados</MDBCardTitle>
            <MDBCardText>
            <ListGroup>
           {
            user.tweets? user.tweets.map((t, i) => {

             let x = user.polaridade[i]? (user.polaridade[i] == 1? 'success' : 'danger' ):'warning'
              return <ListGroup.Item variant={x}>{t}</ListGroup.Item>
            }):[]
           
           }
        </ListGroup>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </>)  

  
}