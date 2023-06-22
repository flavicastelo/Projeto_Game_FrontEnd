import React, { useState, useEffect } from "react";
import CardGames from "../CardGames/index";

import api from "../../utils/api";
import {
    Container,
    Main,
    Body,
    TitleHome,
    ContainerCards,
    SectionHome,
  } from "./styles";
  


export default function Home() {
    const [games, setGames] = useState([]);
    const [erro, setErro] = useState([]);
    const getGames = async () => {

        try {
            const response = await api.get("/data");
            const data = response.data;
            setGames(data);

        } catch (error) {
            console.log(error);
            setErro(error);
        }
    }
    useEffect(() => {
        getGames();
    }, []);


     
      let gamesHome = [];
      for (let i = 0; i < 3; i++) {
        gamesHome.push(games[i]);
      }


    return (
      
        <Main>
        
          <Body>
            <SectionHome>
              <TitleHome>Projeto Frontend React</TitleHome>
              <ContainerCards>
              {games.length === 0 ? <h1>Sem vídeos no momento</h1> : games.map((game) => {
                  return <CardGames games={game} />
                })
            //   (
            //    games.length < 3 ? 
            //     games.map((game) => {
            //       return <CardGames games={game} />
            //     }) : games.map((game) => {
            //       return <CardGames games={game} />
            //     })
            //   )
              }
              </ContainerCards>
            </SectionHome>
           
          </Body>
        </Main>
    
        
    );
}
