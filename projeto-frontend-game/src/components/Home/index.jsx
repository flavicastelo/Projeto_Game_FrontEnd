import React, { useState, useEffect } from "react";
import CardGames from "../CardGames/index";
import Search from "../Search";
import api from "../../utils/api";
import {
  Main,
  Body,
  TitleHome,
  ContainerCards,
  SectionHome,
  Loading,
  DivHeader,
  ContainerGenres
} from "./styles";
import GenresTag from "../Genres/index";

export default function Home() {
  const [games, setGames] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contentErro, setContentErro] = useState(false);
  const [query, setQuery] = useState('');
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [queryGenre, setQueryGenre] = useState('');

  const getGames = async () => {
    try {
      const response = await api.get("/data");
      const data = response.data;
      setGames(data);
      setLoading(false);
    } catch (error) {
      setErro(error.response.status);
      setLoading(false);
    }
  }

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    if (erro >= 500 && erro <= 509) {
      setContentErro(true);
    } else {
      setContentErro(false);
    }
  }, [erro]);

  const lowerQuery = query.toLowerCase();
  const lowerGenre = queryGenre.toLowerCase();

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(lowerQuery) && game.genre.toLowerCase().includes(lowerGenre),
  
  );

  const onChange = (event) => {
    setQuery(event.target.value)
  };
  useEffect(() => {
    const genres = new Set(games.map((game) => game.genre));
    setUniqueGenres([...genres]);
    console.log([...genres]); // é necessário para garantir que uniqueGenres seja um array separado do array original genres.
  }, [games]);

  const filterGenre = (uniqueGenre) => {
    setQueryGenre(uniqueGenre);
  }
  

  return (
    <Main>
      <Body>
        <SectionHome>
          <DivHeader>
            <TitleHome>Projeto Frontend React</TitleHome>
            <Search query={query} onChange={onChange} />
          </DivHeader>
          {loading ? '': erro ? (
           ''
          ) : <ContainerGenres>{uniqueGenres.map((uniqueGenre) => <GenresTag genre={uniqueGenre} onClick={filterGenre}/>)}</ContainerGenres>}
          <ContainerCards>
            {loading ? (
              <Loading />
            ) : erro ? (
              <TitleHome>
                {contentErro
                  ? "O servidor falhou em responder, tente recarregar a página"
                  : "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"}
              </TitleHome>
            ) : filteredGames.length > 0 ? (
              filteredGames.map((game) => <CardGames games={game} />)
            ) : games.map((game) => <CardGames games={game} />)}
          </ContainerCards>
        </SectionHome>
      </Body>
    </Main>
  );
}
