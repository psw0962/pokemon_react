import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';
import './Pokemon.css'

class Pokemons extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <ul className='pokemons-wrapper'>
                <li className='pokemon-wrapper'><PokemonCard id={'1'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'2'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'3'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'4'} /></li>
                <li className='pokemon-wrapper'><PokemonCard id={'5'} /></li>
            </ul>
        )
    }
}
export default Pokemons