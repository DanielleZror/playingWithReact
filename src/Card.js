import React from 'react';
import './Card.css';

const Card = (props) => {
    const robot = props.oneRobot;
    return (
            <div className='cardStyle '>
                <img alt='photo' src={`https://robohash.org/${robot.username}`} ></img>
                <h3>{robot.name}</h3>
                <h5>{robot.email}</h5>
            </div>
    )
}

export default Card;
