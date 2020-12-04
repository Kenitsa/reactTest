import React, {useState, useEffect, useCallback} from 'react'
import './episodes.css'

const Episodes = () => {

    const [episode, setEpisode] = useState([]);
    const [info, setInfo] = useState({})

    const getData = useCallback( () => {
            fetch('https://rickandmortyapi.com/api/episode/')
                .then((response) => response.json())
                .then((json) => {
                    setEpisode(json.results)
                    setInfo(json.info)
                })
    }, [])

    useEffect(() => {
        getData()
    }, [getData])
    

    return (
        <div className='episode'>
            {episode.map(item => {
                return (
                    <div key={item.id}>
                        <div className="episodeWrapper">
                        <div className="imgepisode item">{item.name}</div>
                        <div className="nameepisode item">{item.air_date}</div>
                        <div className="episodeEp item">{item.episode}</div>
                        <div className="episodeSpecies item">{item.characters}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Episodes