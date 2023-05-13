import React from "react";
import { hot } from 'react-hot-loader/root';
import styles from './header.sass';

function HeaderComponent(){
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Hello React</h1>
            <h2>Getting over it!</h2>
            <p>I just love it</p>
        </header>
    )
}

export const Header = hot(HeaderComponent);