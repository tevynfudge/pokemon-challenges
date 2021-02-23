import ReactDOM from 'react-dom';
import React from 'react';

import App from './app';

const challengeList = [
  {
    "challenge" : "Animé",
    "description" : "Beat the game while following the tropes of the Pokémon animé",
    "link" : "https://www.pokecommunity.com/showthread.php?t=391390"
  },
  {
    "challenge" : "Biological Class",
    "description" : "Beat the game using only Pokémon from a single biological class",
    "link" : "https://www.pokecommunity.com/showthread.php?t=391352"
  },
  {
   "challenge" : "Champion",
    "description" : "Beat the game using a team of Pokémon made out of at least 4 Pokémon from your game's champion's team",
    "link" : "https://www.pokecommunity.com/showthread.php?t=404927"
  },
  {
    "challenge" : "Lottery",
    "description" : "Beat the game while testing your luck after each gym",
    "link" : "https://www.pokecommunity.com/showthread.php?t=418787"
  },
  {
    "challenge" : "Monocolor",
    "description" : "Beat the game while only using Pokémon of a certain color",
    "link" : "https://www.pokecommunity.com/showthread.php?t=273694"
  },
  {
    "challenge" : "Monotype",
    "description" : "Beat the game while using Pokémon of one type",
    "link" : "https://www.pokecommunity.com/showthread.php?t=282238"
  },
  {
    "challenge" : "No Fully Evolved",
    "description" : "Beat the game without using fully evolved Pokémon",
    "link" : "https://www.pokecommunity.com/showthread.php?t=323571"
  },
  {
    "challenge" : "No Pokémon Centers",
    "description" : "Beat the game without using Pokémon centers to heal",
    "link" : "https://www.pokecommunity.com/showthread.php?t=280807"
  },
  {
    "challenge" : "Nuzlocke",
    "description" : "Beat the game using the popular Nuzlocke set of rules",
    "link" : "https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge"
  },
  {
    "challenge" : "Solo",
    "description" : "Beat the game using only one Pokémon",
    "link" : "https://www.pokecommunity.com/showthread.php?t=388897"
  },
  {
    "challenge" : "Time Warp",
    "description" : "Beat the game while abiding by the rules of a chosen time period",
    "link" : "https://www.pokecommunity.com/showthread.php?t=297726"
  }
];

export default function displayRandomChallenge() {
  // Randomly generates a number between 0-10 and uses that as the index of challengeList
  const randomChallenge = challengeList[Math.floor((Math.random() * 10) + 1)];

  ReactDOM.render(
    <div style={{textAlign: 'center'}}>
      <App />
      <h1>{randomChallenge.challenge}</h1>
      <h2>{randomChallenge.description}</h2>
      <a href={randomChallenge.link}>More Info About the Challenge</a>
    </div>, 
    document.getElementById('root')
  );
}