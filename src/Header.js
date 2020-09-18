import React, { Component } from 'react';
import styles from './Main.module.css';

class Header extends Component {
    render() {
        return (
            <h1 className={styles.text}>Pokemon Book</h1>
        );
    }
}

export default Header;