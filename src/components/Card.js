import React, {useState, useEffect} from 'react'

function Card({title, children}) {
    const [responseData, setResponseData] = useState('')

    return (
        <div className="card">
            <h3 className="card-header">{title}</h3>
            {children}
        </div>
    )
}

export default Card