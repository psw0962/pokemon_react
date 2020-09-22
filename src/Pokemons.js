import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';
import './Pokemon.css'

class Pokemons extends Component {
    render() {
        return (
            <ul className='pokemons-wrapper'>
                <li className='pokemon-wrapper'><PokemonCard id={'1'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'2'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'3'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'4'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'5'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'6'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'7'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'8'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'9'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'10'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'11'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'12'} /></li>
            </ul>
        )
    }
}
export default Pokemons;