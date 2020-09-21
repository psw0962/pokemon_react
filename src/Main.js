import React, { Component } from 'react';
import './Main.css';
import Pokemons from './Pokemons.js';

class Main extends Component {
    render() {
        return (
            <section>
                <main>
                    <section className={'center'}>
                        <Pokemons />
                    </section>
                </main>
            </section>
        );
    }
}

export default Main;