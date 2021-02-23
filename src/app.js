import React from "react";

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Flexbox from 'flexbox-react';

import { pokemonGameList } from './randomTeam';

import displayRandomChallenge from "./randomChallenge";
import displayRandomTeam from "./randomTeam";

export default function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', padding: '3vh'}}>Random Pokémon Challenge</h1>
      <h2 style={{textAlign: 'center'}}>Click one of the buttons below to receive a random challenge or random team to use on your next Pokémon adventure!</h2>

      <Flexbox flexDirection="row" minHeight="10vh" flexWrap="wrap" justifyContent="center" paddingBottom="3vh">
        <Flexbox element="main" paddingTop="10vh" paddingRight="5vh" paddingBottom="11.5vh">
          <Button style={{fontSize:"2vh"}} variant="danger" onClick={displayRandomChallenge}>Random Challenge</Button>{' '}      
        </Flexbox>
        <Flexbox element="main" paddingTop="10vh" paddingLeft="5vh" paddingBottom="11.5vh">
          <Dropdown>
            <Dropdown.Toggle variant="danger">Random Team</Dropdown.Toggle>
            <Dropdown.Menu>
              {pokemonGameList.map((game) => (
                <Dropdown.Item as="button" onClick={() => displayRandomTeam(game)}>{ game.name }</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Flexbox>  
      </Flexbox>
    </div>
  );
}