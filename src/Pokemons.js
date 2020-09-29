import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';
import './Pokemon.css'
import { Button, Row, Col } from 'antd'
import SearchBox from './SearchBox.js';

class Pokemons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            pokemons: [],
            next: '',
            prev: '',
            search: ''
        }
    }

    componentDidMount() {
        this.fetchPokemons('https://pokeapi.co/api/v2/pokemon/')
    }

    fetchPokemons = (url) => {
        this.setState({ ...this.state, isLoading: true })
        fetch(url)
            .then((respone) => respone.json())
            .then(({ count, results, next, previous }) => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    total: count,
                    pokemons: results,
                    next: next,
                    prev: previous
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return null
        }

        return (
            <div className='pokemon-book-wrapper'>
                <SearchBox handleSearch={(search) => {
                    this.setState({
                        ...this.state,
                        search: search
                    })
                }} />

                <Row justify='center' className='pokemons-wrapper'>
                    {this.state.search ?
                        <Col key={this.state.search} span={4} className='pokemon-wrapper'>
                            <PokemonCard name={this.state.search} />
                        </Col>
                        : this.state.pokemons.map((pokemon, i) => (
                            <Col key={pokemon.name} span={4} className='pokemon-wrapper'>
                                <PokemonCard name={pokemon.name} />
                            </Col>
                        ))
                    }
                </Row>
                
                <div className='pokemon-book-btn-wrapper'>
                    <Button onClick={() => this.fetchPokemons(this.state.prev)}>Prev</Button>
                    <Button onClick={() => this.fetchPokemons(this.state.next)}>Next</Button>
                </div>
            </div>
        )
    }
}
export default Pokemons;