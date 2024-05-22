import React from 'react';
import styles from '../styles/Home.module.css';

const NewsCard = ({ title, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="News Image"/>
            <div className={styles['card-content']}>
                <h2>{title}</h2>
                
            </div>
        </div>
    );
}

export default NewsCard;
