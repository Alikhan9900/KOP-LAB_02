import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

function ScrollPositionComponent() {
    const scrollPosition = useScrollPosition();

    return (
        <div>
            <h1>Відстеження позиції скролу</h1>
            <p>Поточна позиція скролу: {scrollPosition}px</p>
            <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f3f3f3, #333)' }}>
                <p>Скрольте вниз, щоб побачити зміну значення!</p>
            </div>
        </div>
    );
}

export default ScrollPositionComponent;
