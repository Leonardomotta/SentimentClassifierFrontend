import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate,useParams } from "react-router";
import { Chart , ArcElement, Tooltip, Legend ,CategoryScale,
  LinearScale,
  BarElement,PointElement,
  LineElement,
  Title,
  PieController, } from 'chart.js';
import { Line , Bar,Pie} from 'react-chartjs-2';
import { Container } from "react-bootstrap";
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




export default function ComparePage() {

let [user, setUser] = useState({});
let [load,setLoad] =useState(false)
const us = useNavigate()
let {candidato} = useParams()
let {data} = useParams({})



 useEffect( () => { 
  (async()=>{
  let li = 0;
  let cands =  ["SimoneTebet","andreJanones","ciro","bolsonaro","lula"]
  let dt={}
  dt.candidatos = []


 for(li ; li < cands.length; li++) {
    let element = cands[li]
    let  url =   "/users?candidato="+ element +"&&ano="+ "2022"
    let response =  await api.get('https://sentimentclassierapi.herokuapp.com'+url)
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
  let c={}

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

dt.candidatos.push({"positivos" : positivos, 
"negativos" : negativos, 
"neutro" : neutro,
"polaridade" : jo.polaridade,
"timestamp": jo.timestamp,
"total" : total,
"tweets" :jo.tweets,
"bymoutP":jo.bymoutP,
"bymoutN":jo.bymoutN,
"bymoutZ":jo.bymoutZ
})

}

        const data = {
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
              label: 'Simone Tebet',
              data: dt.candidatos[0].bymoutP,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'André Janones',
              data: dt.candidatos[1].bymoutP,
              borderColor: 'rgb(0, 0, 0)',
              backgroundColor: 'rgba(0, 0, , 0.5)',
            },
             {
               label: 'Ciro Gomes',
               data: dt.candidatos[2].bymoutP,
               borderColor: 'rgb(0, 0, 255)',
               backgroundColor: 'rgba(0, 0, 255, 0.5)',
             },
             {
               label: 'Bolsonaro',
               data: dt.candidatos[3].bymoutP,
               borderColor: 'rgb(0, 255, 0)',
               backgroundColor: 'rgba(0, 255, 0, 0.5)',
             },
            {
              label: 'Lula',
              data: dt.candidatos[4].bymoutP,
              borderColor: 'rgb(255, 0, 0)',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
            }]}
            
              user.data = data

              const data2 = {
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
                    label: 'Simone Tebet',
                    data: dt.candidatos[0].bymoutN ,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                  {
                    label: 'André Janones',
                    data: dt.candidatos[1].bymoutN,
                    borderColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgba(0, 0, , 0.5)',
                  },
                   {
                     label: 'Ciro Gomes',
                     data: dt.candidatos[2].bymoutN,
                     borderColor: 'rgb(0, 0, 255)',
                     backgroundColor: 'rgba(0, 0, 255, 0.5)',
                   },
                   {
                     label: 'Bolsonaro',
                     data: dt.candidatos[3].bymoutN,
                     borderColor: 'rgb(0, 255, 0)',
                     backgroundColor: 'rgba(0, 255, 0, 0.5)',
                   },
                  {
                    label: 'Lula',
                    data: dt.candidatos[4].bymoutN,
                    borderColor: 'rgb(255, 0, 0)',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  }]}

                  user.data2 = data2


                  const data3 = {
                    labels :  ['Simone Tebet','André Janones','Ciro Gomes','Bolsonaro','Lula'],
                    datasets: [
                        {label:'Simone Tebet',
                        data : [dt.candidatos[0].negativos + dt.candidatos[0].neutro] , 
                        backgroundColor :'rgba(255, 99, 132, 0.5)',
                      },
                      {label:'André Janones',
                      data : [0,dt.candidatos[1].negativos + dt.candidatos[1].neutro] , 
                      backgroundColor :'rgba(0, 0, , 0.5)'
                    },
                    {label:'Ciro Gomes',
                    data : [0,0,dt.candidatos[2].negativos + dt.candidatos[2].neutro] , 
                    backgroundColor :'rgba(0, 0, 255, 0.5)',
                  },
                  {label:'Bolsonaro',
                  data : [0,0,0,dt.candidatos[3].negativos + dt.candidatos[3].neutro] , 
                  backgroundColor :'rgba(0, 255, 0, 0.5)',
                },
                {label:'Lula',
                data : [0,0,0,0,dt.candidatos[4].negativos + dt.candidatos[4].neutro],
                backgroundColor :'rgba(255, 0, 0, 0.5)'}
              ]}
                    
              user.data3 = data3
              setLoad(true)
             
      
 })()

})
  

        






    
        return ( <>
      <Container>
      {!load && <h3 style={{marginLeft : "100px",marginTop:"20px"}}>Carregando dados. Aguarde!</h3> }

      </Container>


       

    <MDBRow  style={{marginTop:'30px',marginLeft:'20%'}}className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardBody>
            <MDBCardTitle>Tweets positivos sobre candidatos em 2022</MDBCardTitle>
            {load && <Line width={300} height={300} data={user.data} /> }

          </MDBCardBody>
        </MDBCard>

      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardBody>
            <MDBCardTitle>Tweets não positivos sobre candidatos em 2022</MDBCardTitle>
            {load && <Bar width={300} height={300} data={user.data3} /> }

          </MDBCardBody>
        </MDBCard>

      </MDBCol>
      
      </MDBRow>
        





        {/* </span> */}


       
      
      
        </>)
 }