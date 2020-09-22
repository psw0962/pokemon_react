import React, { Component } from 'react';
import './Main.css';
import Pokemons from './Pokemons.js';
import SearchBox from './SearchBox.js';

class Main extends Component {
    render() {
        return (
            <section>
                <main>
                    <section className={'center'}>
                        <SearchBox />
                        <Pokemons />
                    </section>
                </main>
            </section>
        );
    }
}

export default Main;