import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {
    render() {
        return (
            <section>
                <main>
                    <p className={styles.text}>pokemonName</p>
                    {/* <img className={styles.img}></img> */}
                    <p className={styles.text}>height</p>
                    <p className={styles.text}>weight</p>
                </main>
            </section>
        );
    }
}

export default Main;