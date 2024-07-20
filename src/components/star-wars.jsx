import React, { useEffect, useState } from 'react';
import '../components/star-wars.css';
import { Link } from 'react-router-dom';

export default function StarWars() {
    const [currentList, setCurrentList] = useState({});
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');
    const [url, setUrl] = useState('https://swapi.dev/api/people');

    const handleNext = () => {
        setUrl(next);
    };

    const handlePrevious = () => {
        previous && setUrl(previous);
    };


    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCurrentList(data)
                setNext(data.next);
                setPrevious(data.previous);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchDetails();
    }, [url]);

    console.log(currentList.results);

    return (
        <main className='container-main'>
            <div className='wrap'>
                {currentList.results && currentList.results.map((character) =>{
                    const id = character.url.match(/\/([0-9]*)\/$/)[1];
                    return(
                        <div key={id} className='container-link'>
                            <Link to={`/person/${id}`} className='character-link'>
                                <p className='parrafo-link'>
                                    {character.name}
                                </p>
                                </Link>
                        </div>
                    )
                })}

            <div className='botones'>
                <button onClick={handlePrevious} className='boton'>Anterior</button>
                <button onClick={handleNext} className='boton'>Siguiente</button>
            </div>
            </div>
        </main>
    );
}
