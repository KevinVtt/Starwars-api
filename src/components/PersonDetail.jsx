import React from 'react'

export default function PersonDetail({personSearch}) {
  return (
    <div className='card'>
        <ul>
            <li><h1>Name: {personSearch.name}</h1></li>
            <li><p>Height: {personSearch.height}</p></li>
            <li><p>Mass: {personSearch.mass}</p></li>
            <li><p>Hair color: {personSearch.hair_color}</p></li>
            <li><p>Eye color: {personSearch.eye_color}</p></li>
         </ul>
     </div>
  )
}
