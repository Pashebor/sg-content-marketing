import React from 'react';
import { Component } from 'react';
import Results from '../Results';
import Recomendations from './recomendations/Recomendations';
import BringClients from './bring-clients/BringClients';
import Approach from './approach/Approach';
import CMarketing from './content-marketing/CMarketing';
import MQuality from './materials-quality/MQuality';

class Main extends Component{
    render() {
        return(
           <main className="main">
               <CMarketing/>
               <Approach/>
               <Recomendations/>
               <MQuality/>
               <Results/>
               <BringClients/>
           </main>
        )
    };
}

export default Main;

