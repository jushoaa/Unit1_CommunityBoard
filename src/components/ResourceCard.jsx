import React from 'react';
import './ResourceCard.css';

const ResourceCard = (props) => {

    return (
        <article className="card">
            <img 
                src= {props.image}
                alt = {props.title}
                className = "card-image"
                />
                  
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.description}</p>
            <a 
                href={props.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-button"
      >
        View Resource
      </a>
        </article>
    )

}

export default ResourceCard;