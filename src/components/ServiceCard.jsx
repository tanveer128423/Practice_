import React from 'react';

function ServiceCard({title,description}){
   return (
   <div>
        <div>
            <h1>Title: {title}</h1>
            <p>Description: {description}</p>

        </div>
    </div>

);
}
export default ServiceCard;