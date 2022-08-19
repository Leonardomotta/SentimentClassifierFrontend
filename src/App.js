import React, { useEffect, useState } from "react";
import api from "./services/api";
import NavbarComponent from "./components/navbarComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentComponent from './components/contentComponent'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {CandidateAnalisis}from './components/CandidateAnalisis'
import {TabsComponent} from './components/tabsComponent'
import {CCcomponent} from '../src/components/CCcomponent'

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users?candidato=ciro&&ano=2022")
      .then((response) => {
         var json = response.data 
         let keys=Object.keys(json)[0]
         var jo = (json[keys].tweets)
         setUser({})
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (<div className="App">
            <Router>
            <NavbarComponent/> 

              <Routes>
                <Route path = "/" element =  {<ContentComponent/>}/>
                {/* <Route path = "/candidato/:candidato" element =  {<CandidateAnalisis/>}/> */}
                <Route path = "/candidato/:candidato" element =  {<TabsComponent/>}/>
                <Route path = "/compararCandidatos" element =  {<CCcomponent/>}/>
              </Routes>
           </Router>

    </div>

  );
}
