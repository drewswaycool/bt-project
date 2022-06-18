import React from 'react'

function Profile({image, name, url}) {
  return (
    <div className="basic-flex">
        <img className="org-avatar" src={image} alt={name}/>
        <div>
            <h2>{name}</h2>
            <a href={url} target="_blank" rel="noreferrer">{url}</a>
        </div>
    </div>
  )
}

export default Profile