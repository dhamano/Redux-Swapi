import React from "react";
import PropTypes from 'prop-types';

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters    : PropTypes.objectOf( PropTypes.shape({
    birth_year  : PropTypes.string,
    created     : PropTypes.string,
    edited      : PropTypes.string,
    eye_color   : PropTypes.string,
    films       : PropTypes.arrayOf( PropTypes.string ),
    gender      : PropTypes.string,
    hair_color  : PropTypes.string,
    height      : PropTypes.string,
    homeworld   : PropTypes.string,
    mass        : PropTypes.string,
    name        : PropTypes.string,
    skin_color  : PropTypes.string,
    species     : PropTypes.arrayOf( PropTypes.string ),
    starships   : PropTypes.arrayOf( PropTypes.string ),
    url         : PropTypes.string,
    vehicles    : PropTypes.arrayOf( PropTypes.string ),
  }))
}