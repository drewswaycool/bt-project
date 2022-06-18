import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './Profile';
import CardError from './CardError'

function WebHooks({endpoint}) {
    const [webHooks, setWebHooks] = useState([])
    const [error, setError] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        window.open(e.currentTarget.getAttribute('data-url'), '_blank')
    }

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setWebHooks(response.data)
            }
            )
            .catch(error => {
                setError("This endpoint requires authentication.")
            }
            )
    }, [])
  return (
    <div className="item-inside">
         {!error ? (
        <>
        {webHooks.map(hook => (
            <div key={hook.id} className="item-line" data-url={hook.html_url} onClick={handleClick}>
                <div className="item-name">
            </div>
                <div className="item-description">
                <ul>
                    <li>ID: {hook.id}</li>
                    <li>Name: {hook.name}</li>
                </ul>
                </div>
            </div>
        ))}
        </>
            ) : (
        <CardError error={error} />
    )}
    </div>
  )
}

export default WebHooks