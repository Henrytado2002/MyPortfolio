import React, { useState } from 'react';
import './WorkItem.css';

const WorkItem = ({ name, image, info, tech }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className='work-item-container'>
            <div className='work-item-header' onClick={() => setOpened(!opened)}>
                <h2>{name}</h2>
            </div>
            <div className={`work-item-body ${opened ? 'open' : ''}`}>
                <img className='work-item-screenshot' src={image} alt={name} />
                <p className='work-item-info'>{info}</p>
                <ul className='work-item-tech'>
                    {tech.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkItem;