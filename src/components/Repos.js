import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardError from './CardError'

function Repos({endpoint}) {
    const [reposData, setReposData] = useState([])
    const [error, setError] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        window.open(e.currentTarget.getAttribute('data-url'), '_blank')
    }
    
    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setReposData(response.data)
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
        {reposData.map(repo => (
            <div key={repo.id} className="item-line" data-url={`https://www.github.com/BoomTownROI/${repo.name}`} onClick={handleClick}>
                <div className="item-name">
                    <h3>{repo.name}</h3>
                    <sub>ID: {repo.id}</sub>
                </div>
                <div className="item-description">
                    <ul>
                    <li>Description: {repo.description}</li>
                    <li>Language: {repo.language}</li>
                    <li>Created: {repo.created_at}</li>
                    <li>Updated: {repo.updated_at}</li>
                    <li>Pushed: {repo.pushed_at}</li>
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

export default Repos