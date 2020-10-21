import React, { useState, useEffect } from 'react';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import { SwitchPanel } from './components/ui/SwitchPanel';
import CharacterGrid from './components/characters/CharacterGrid';
import { useFetch } from './hooks/useFetch';

import './App.css';
import bb from './img/bg.jpg';
import bcs from './img/bcs_bg.jpg';

const urlService = 'https://www.breakingbadapi.com/api/';

const App = () => {
  const [search, setSearch] = useState('');
  const [serieShow, setSerieShow] = useState('BB');

  const { data: characters, loading, error } = useFetch(`${urlService}characters?name=${search}`);

  const changeWallpapper = (show) => {
    (show === 'BB') ?
      document.body.style.background = `#000 url(${bb}) no-repeat center center/cover`
      :
      document.body.style.background = `#D7BD00 url(${bcs}) no-repeat center center/cover`
  }

  // const [state, setState] = useState({data: null, loading: true, error: null});
  // const loadCharacters = () => {
  //   setState({data: characters, loading: loading, error: error});
  // }

  useEffect(() => {
    changeWallpapper(serieShow);
    // loadCharacters();
  }, [serieShow]);

  useEffect(() => {

  }, [search])

  return (
    <div className="container">
      <SwitchPanel setSerieShow={setSerieShow} />
      <Header serieShow={serieShow} />
      <Search getQuery={(q) => setSearch(q)} />
      {
        (error) ?
          (
            <h1>Error loading data... </h1>
          ) :
          (
            <CharacterGrid isLoading={loading} characters={characters} />
          )
      }
    </div>
  );
}

export default App;
