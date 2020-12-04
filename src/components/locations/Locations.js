import React, {useState, useEffect, useCallback} from 'react'
import './locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState({})

    const getData = useCallback( () => {
            fetch('https://rickandmortyapi.com/api/location/')
                .then((response) => response.json())
                .then((json) => {
                    setLocations(json.results)
                    setInfo(json.info)
                })
    }, [])


    useEffect(() => {
        getData()
    }, [getData])
    

    return (
        <div className='locations'>
            {locations.map(item => {
                return (
                    <div key={item.id}>
                        <div className="locationsWrapper">
                        <div className="imglocations">{item.name}</div>
                        <div className="namelocations">{item.type}</div>
                        <div className="locationsEp">{item.dimension}</div>
                        <div className="locationsSpecies">{item.residents}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Locations