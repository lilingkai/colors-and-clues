import React from 'react';
import styles from './TitleBar.module.css';

export function TitleBar() {
    return(
        <div>
            <div className={styles['title-bar']}>
                Colors and Clues
            </div>
            <div className={styles['title-bar']}>
                <span>A helper application for the boardgame, "Hues and Cues", designed by Scott Brady</span>
            </div>
        </div>

    );
}