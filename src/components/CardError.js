import React from 'react'

function CardError({error}) {
  return (
    <div className="card-error">
        <h3>Error: {error.message}</h3>
    </div>
  )
}

export default CardError