import React from 'react';

export default function Resource({resource, match}) {
    const info = resource.find( item => {
        return item.id === match.params.subid;
    })
    return (
        <div>
            <h1>{info.name}</h1>
            <p>{info.description}</p>
            <a href={info.url}>More info</a>
        </div>
    )
}