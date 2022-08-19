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
            src='https://www.focus.jor.br/wp-content/uploads/2020/07/jornal-da-morada-entrevista-ciro-gomes-qUUd.jpg'
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
            src='https://ichef.bbci.co.uk/news/640/cpsprodpb/B16D/production/_111412454_bolso.png'
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
            src='https://emc.acidadeon.com/dbimagens/expresidente_lula_1200x675_04052022172648.webp'
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
            src='https://i.em.com.br/0vS0a8RLMxNss8bvNgfgbs5ckfc=/1200x675/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/07/22/1382009/o-deputado-federal-andre-janones-pre-candidato-do-avante-a-presidencia_1_62810.jpg'
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
            src='https://i.em.com.br/j0zpig9rifs03ZnDWVtxQ_Z6EzM=/1200x675/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/05/23/1368420/simone-tebet-le-um-papel-ao-microfone-no-plenarios-do-senado_1_38578.jpg'
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
            src='data:image/jpeg;base64,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'
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
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3BwtNe_hE02PZkmDeTsrnXrCQD-ta5m6cQVts_Yw21y3hY5-Wlx0HsTcjA7OsFAlXdY&usqp=CAU'
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
            src='https://i.em.com.br/uJc05XOwIR1A5v7AgYwM30_8O2s=/1200x675/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/07/31/1383698/luciano-bivar_1_35404.jpg'
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