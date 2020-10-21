import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ?
        (
            <Spinner />
        ) :
        (
            <section className='cards'>
                {
                    characters.map(character => (
                        <CharacterItem key={character.char_id} item={character} />
                    ))
                }
            </section>
        )
}

export default CharacterGrid;