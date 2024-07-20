import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PersonDetails() {

    const {id} = useParams();
    const [PersonDetails,setPersonDetails] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() =>{

        const fetchPersonDetailts = async () =>{
            try{
                const response = await fetch(`https://swapi.dev/api/people/${id}/`)
                const data = await response.json()
                setPersonDetails(data)
                setLoading(false)
            } catch(error) {
                console.eror(error)
                setError(error)
                setLoading(false)

            }
        }

        fetchPersonDetailts();

    },[id])

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }

  return (
    <div className='container-main'>{(
        PersonDetails && 
            <div key={id} className='container-card'>
                <div className='card'>
                        <ul>
                            <li><h1>Name: {PersonDetails.name}</h1></li>
                            <li><p>Height: {PersonDetails.height}</p></li>
                            <li><p>Mass: {PersonDetails.mass}</p></li>
                            <li><p>Hair color: {PersonDetails.hair_color}</p></li>
                            <li><p>Eye color: {PersonDetails.eye_color}</p></li>
                            <li><p>Birth Year: {PersonDetails.birth_year}</p></li>
                            <li><p>Gender: {PersonDetails.gender}</p></li>
                        </ul>
                </div>
            </div>
        )
    }</div>
  )
}
