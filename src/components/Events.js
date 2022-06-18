import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardError from './CardError'

function Events({endpoint}) {
    const [eventsData, setEventsData] = useState([])
    const [error, setError] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        window.open(e.currentTarget.getAttribute('data-url'), '_blank')
    }
    
    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setEventsData(response.data)
            }
            )
            .catch(error => {
                setError(error)
            }
            )
    }, [])
  return (
    <div className="item-inside">
        {!error ? (
        <>
        {eventsData.map(event => (
            <div key={event.id} className="item-line" data-url={`${event.repo.url}`} onClick={handleClick}>
                <div className="item-name">
                    <h3>{event.type}</h3>
                    <sub>ID: {event.id}</sub>
                </div>
                <div className="item-description">
                <ul>
                    <li>ID: {event.id}</li>
                    <li>Type: {event.type}</li>
                    <li>Repo: {event.repo.name}</li>
                    <li>URL: <a href={event.repo.url}>{event.repo.url}</a></li>
                    <li>Created: {event.created_at}</li>
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

export default Events