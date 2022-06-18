import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './Profile';

function OrganizationHeader({endpoint}) {
    const [orgData, setOrgData] = useState('')
    const [error, setError] = useState(null)
    const {id, name, html_url, is_verified, created_at, updated_at, avatar_url} = orgData

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                setOrgData(response.data)
            }
            )
            .catch(error => {
                setError(error)
            }
            )
    }, [orgData])

    return (
        <div className="org-header">
            <Profile image={avatar_url} name={name} url={html_url} />
            <div>
            <ul>
                <li>ID: {id}</li>
                <li>Name: {name}</li>
                <li>URL: <a href={html_url}>{html_url}</a></li>
                <li>Verified: {is_verified ? 'Yes' : 'No'}</li>
                <li data-latest={Date.parse(created_at) > Date.parse(updated_at)}>Created: {created_at}</li>
                <li data-latest={Date.parse(created_at) < Date.parse(updated_at)}>Updated: {updated_at}</li>
            </ul>
            </div>
        </div>
    )
}

export default OrganizationHeader