import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

const PARTY_SIZE = 6;

export const pokemonGameList = [
  { "generation" : "2", "name" : "Red - Blue - Yellow" },
  { "generation" : "3", "name" : "Gold - Silver - Crystal" },
  { "generation" : "4", "name" : "Ruby - Sapphire - Emerald" },
  { "generation" : "2", "name" : "Fire Red - Leaf Green" },
  { "generation" : "5", "name" : "Diamond - Pearl" },
  { "generation" : "6", "name" : "Platinum" },
  { "generation" : "7", "name" : "Heart Gold - Soul Silver" },
  { "generation" : "8", "name" : "Black - White" },
  { "generation" : "9", "name" : "Black 2 - White 2" },
  { "generation" : "12", "name" : "X - Y" },
  { "generation" : "15", "name" : "Omega Ruby - Alpha Sapphire" },
  { "generation" : "16", "name" : "Sun - Moon" },
  { "generation" : "21", "name" : "Ultra Sun - Ultra Moon" },
  { "generation" : "26", "name" : "Let's Go Pikachu - Let's Go Eevee" },
  { "generation" : "27", "name" : "Sword - Shield"}
];

async function getRandomTeam(generation) {
  let pokemon_team = [];
  let pokemon_name;
  let pokemon_sprite;

  // The pokedex contains information for all pokemon available in a given generation
  let pokedex = await fetch("https://pokeapi.co/api/v2/pokedex/" + generation);
  const pokedex_JSON = await pokedex.json();
  const pokedex_size = JSON.stringify(pokedex_JSON['pokemon_entries'].length);


  for(let pkmn_num = 1; pkmn_num < PARTY_SIZE + 1; pkmn_num ++) {
    pokemon_name = JSON.stringify(pokedex_JSON['pokemon_entries'][Math.floor((Math.random() * pokedex_size - 1) + 1)]['pokemon_species']['name']).replace(/\"/g, "");

    let pokemon_data = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_name);
    const pokemon_data_JSON = await pokemon_data.json();
    pokemon_sprite = JSON.stringify(pokemon_data_JSON['sprites']['front_default']).replace(/\"/g, "");

    pokemon_team.push({"name" : pokemon_name, "sprite" : pokemon_sprite});
  }

  //Returns an array with objects containing each pokemon's name and sprite url
  return pokemon_team;
}

export default async function displayRandomTeam(game) {
  const team = await getRandomTeam(game.generation);

  ReactDOM.render(
    <div style={{textAlign: 'center'}}>
      <App />
      <h1>Your Team for Pokémon {game.name}</h1>
      <CardDeck>
        {team.map((pokemon) => (
          <Card>
            <Card.Body>
              <Card.Text>{pokemon.name}</Card.Text>
            </Card.Body>
            <Card.Img src={pokemon.sprite} />
          </Card>
        ))} 
      </CardDeck> 
    </div>,
    document.getElementById('root')
  );
}

