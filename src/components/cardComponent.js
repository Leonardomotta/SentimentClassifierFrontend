import React, { useEffect, useState } from "react";
import "bootstrap";
import {Card,Button, Container} from 'react-bootstrap'
import logo from '../SVGFiles/small-twitter-icon-png-13.jpg';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import '../css/main.css'




export default class CardComponent extends React.Component {
    
    render() {
      return (<> <Container style={{
        justifyContent: "space-between",
      }} > <p></p> <p></p>

      <span  style={{
          display: "flex",
          alignContent: "center",
          marginTop: "50px",
          marginBottom:"30px",
          marginLeft:"30%"
        }} ><h1  >Selecione um dos candidados a seguir</h1></span>
      
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
      <Link to="candidato/ciro" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/ciro.jpg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Ciro Gomes</MDBCardTitle>
            <MDBCardText>
            Ciro Ferreira Gomes GOMM é um advogado, professor universitário e político brasileiro, filiado ao Partido Democrático Trabalhista, do qual é vice-presidente.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

      <MDBCol>
      <Link to="candidato/bolsonaro" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/bolsonaro.jpg')}
            alt='...'
            position='top'
            className='card'
          />
          <MDBCardBody>
            <MDBCardTitle>Bolsonaro</MDBCardTitle>
            <MDBCardText>Jair Messias Bolsonaro GOMM é um militar reformado e político brasileiro, filiado ao Partido Liberal. É o 38º presidente do Brasil desde 1º de janeiro de 2019, tendo sido eleito pelo Partido Social Liberal. Foi deputado federal pelo Rio de Janeiro entre 1991 e 2018.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>
      <MDBCol>
      <Link to="candidato/lula" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100' >
          <MDBCardImage
            src={require('../SVGFiles/lula.webp')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Lula</MDBCardTitle>
            <MDBCardText>
            Luiz Inácio Lula da Silva GColL GCTE GCMM, mais conhecido como Lula, é um ex-sindicalista, ex-metalúrgico e político brasileiro, filiado ao Partido dos Trabalhadores, do qual é o principal fundador. Foi o 35.º presidente do Brasil, tendo exercido o cargo de 1 de janeiro de 2003 a 1 de janeiro de 2011.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

      <MDBCol>
      <Link to="candidato/andreJanones" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/janones.webp')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>André Janones</MDBCardTitle>
            <MDBCardText>
            André Luis Gaspar Janones é um advogado e político brasileiro, filiado ao Avante. Atualmente, é deputado federal por Minas Gerais desde 2019.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

      <MDBCol>
      <Link to="candidato/SimoneTebet" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/tebet.webp')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Simone Tebet</MDBCardTitle>
            <MDBCardText>
            Simone Nassar Tebet é uma advogada, professora, escritora e política brasileira, filiada ao Movimento Democrático Brasileiro. Atualmente, ocupa o cargo de senadora da República pelo estado de Mato Grosso do Sul..
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

      <MDBCol>
      <Link to="candidato/Felipe d'Avila" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/dv.jpg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Felipe d'Avila</MDBCardTitle>
            <MDBCardText>
            Luiz Felipe Chaves d’Avila cientista político, político e fundador do Centro de Liderança Pública. É autor de livros de história e de política.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

      <MDBCol>
      <Link to="candidato/Eymael" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/eymael.jpg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>José Maria Eymael</MDBCardTitle>
            <MDBCardText>
            José Maria Eymael, mais conhecido por Eymael, é um advogado, empresário e político brasileiro, fundador e atual presidente do Democracia Cristã. Foi um dos constituintes da Constituição Federal de 1988.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

      <MDBCol>
      <Link to="candidato/Luciano Bivar" style={{textDecoration:'none', color:'black'}}>

        <MDBCard className='h-100'>
          <MDBCardImage
            src={require('../SVGFiles/bvar.webp')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Luciano Bivar</MDBCardTitle>
            <MDBCardText>
            Luciano Caldas Bivar é um político, empresário brasileiro, e o atual presidente nacional do partido político União Brasil. Atualmente deputado federal por Pernambuco. Foi presidente nacional do Partido Social Liberal até a sua fusão com o Democratas. Em 2006, disputou a presidência da República pelo PSL            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>

      </MDBCol>

    </MDBRow>
    </Container>
    </>)  
    }

}