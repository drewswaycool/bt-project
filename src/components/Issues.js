import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './Profile';
import CardError from './CardError'

function Issues({endpoint}) {
    const [issues, setIssues] = useState([])
    const [error, setError] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        window.open(e.currentTarget.getAttribute('data-url'), '_blank')
    }

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setIssues(response.data)
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
        {issues.map(issue => (
            <div key={issue.id} className="item-line" data-url={issue.html_url} onClick={handleClick}>
                <div className="item-name">
            </div>
                <div className="item-description">
                <ul>
                    <li>ID: {issue.id}</li>
                    <li>Name: {issue.name}</li>
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

export default Issues