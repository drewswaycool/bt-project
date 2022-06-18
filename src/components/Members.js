import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './Profile';
import CardError from './CardError'

function Members({endpoint}) {
    const [memebersData, setMembersData] = useState([])
    const [error, setError] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        window.open(e.currentTarget.getAttribute('data-url'), '_blank')
    }

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setMembersData(response.data)
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
        {memebersData.map(member => (
            <div key={member.id} className="item-line" data-url={member.html_url} onClick={handleClick}>
                <div className="item-name">
                <Profile image={member.avatar_url} name={member.login} url={member.html_url}/>
            </div>
                <div className="item-description">
            <ul>
                <li>ID: {member.id}</li>
                <li>Login: {member.login}</li>
                <li>URL: <a href={member.html_url}>{member.html_url}</a></li>
                <li>Type: {member.type}</li>
                <li>Site Admin: {member.site_admin}</li>
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

export default Members