import React, { Component } from 'react';
import styles from './Main.module.css';
import PokemonCard from './PokemonCard.js';

class Main extends Component {
    render() {
        return (
            <section>
                <main>
                    <section className={styles.center}>
                        <PokemonCard />
                    </section>
                </main>
            </section>
        );
    }
}

export default Main;