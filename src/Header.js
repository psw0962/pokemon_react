import React, { Component } from 'react';
import styles from './Main.module.css';

class Header extends Component {
    render() {
        return (
            <section>
                <h1 className={styles.text}>Pokemon Book</h1>
            </section>
        );
    }
}

export default Header;