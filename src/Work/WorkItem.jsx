import React, { useState } from 'react';
import './WorkItem.css';

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const WorkItem = ({ name, image, info, tech, logo, link_app, link_code }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className='work-item-container'>
            <div className='work-item-header' onClick={() => setOpened(!opened)}>
                <h2>{name}</h2>
            </div>
            <div className={`work-item-body ${opened ? 'open' : ''}`}>
                <img className='work-item-screenshot' src={image} alt={name} />
                <div className='work-item-info-container'>
                    <p className='work-item-info'>{info}</p>
                    <div className='work-item-info-container-division'>
                        <ul className='work-item-tech-list'>
                            {tech.map((item, index) => (
                                <li key={index}>{item.logo} {item.name}</li>
                            ))}
                        </ul>
                        <div className='work-item-links-container'>
                        <a target="_blank" href={link_app}>
                            <FaExternalLinkAlt className='work-item-link' />
                        </a>
                        <a target="_blank" href={link_code}>
                            <FaCode className='work-item-link' />
                        </a>
                        </div>
                    </div>
                </div>
                {logo}
            </div>
        </div>
    );
};

export default WorkItem;