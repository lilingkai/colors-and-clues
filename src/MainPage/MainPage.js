import React from 'react';
import { TitleBar } from './TitleBar/TitleBar';
import HuesAndCues from '../assets/HuesAndCues.png';
import styles from './MainPage.module.css';
import { ColorGenerator } from './ColorGenerator/ColorGenerator';

export function MainPage() {
    return (
        <div className={styles['main-area']}>
            <TitleBar />
            <img src={HuesAndCues} className={styles.board} alt='board'/>
            <ColorGenerator />
        </div>
    );
}