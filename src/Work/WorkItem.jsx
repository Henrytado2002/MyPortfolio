import React, { useState } from 'react';
import './WorkItem.css';

const WorkItem = ({ name, image }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className='work-item-container'>
            <div className='work-item-header' onClick={() => setOpened(!opened)}>
                <h2>{name}</h2>
            </div>
            <div className={`work-item-body ${opened ? 'open' : ''}`}>
                <img src={image} alt={name} />
            </div>
        </div>
    );
};

export default WorkItem;