import React, {useState, useEffect, useCallback} from 'react'
import './characters.css'
import Pagination from './pagination/Pagination'
import FilterGender from './filters/filterGender/FilterGender'
import FilterStatus from './filters/filterStatus/FilterStatus'
import FilterSpecies from './filters/filterSpecies/FilterSpecies'

const Characters = () => {

    const [persons, setPersons] = useState([]);
    const [info, setInfo] = useState({})

    const getData = useCallback( () => {
            fetch('https://rickandmortyapi.com/api/character/')
                .then((response) => response.json())
                .then((json) => {
                    setPersons(json.results)
                    setInfo(json.info)
                })
    }, [])

    const prevCallback = useCallback(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=32&limit=10')
        .then((response) => response.json())
        .then((json) => {
            setPersons(json.results)
            setInfo(json.info)
        })
    }, [setInfo, setPersons])

    const nextCallback = useCallback(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=2&limit=10')
        .then((response) => response.json())
        .then((json) => {
            setPersons(json.results)
            setInfo(json.info)
        })
    }, [setInfo, setPersons])

    const onChangehendler = useCallback((gender) => {
        fetch(`https://rickandmortyapi.com/api/character/?gender=${gender}`)
        .then((response) => response.json())
        .then((json) => {
            setPersons(json.results)
            setInfo(json.info)
        })
    }, [])
    const onChangeStatus = useCallback((status) => {
        fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
        .then((response) => response.json())
        .then((json) => {
            setPersons(json.results)
            setInfo(json.info)
        })
    }, [])
    const onChangeSpecies = useCallback((species) => {
        fetch(`https://rickandmortyapi.com/api/character/?species=${species}`)
        .then((response) => response.json())
        .then((json) => {
            setPersons(json.results)
            setInfo(json.info)
        })
    }, [])

    useEffect(() => {
        getData()
    }, [getData])
    

    return (
        <div className='characters'>
        <div className="filters">
        <FilterGender onChangehendler={onChangehendler} />
        <FilterStatus onChangeStatus={onChangeStatus} />
        <FilterSpecies onChangeSpecies={onChangeSpecies} />
        </div>
        <div className="itemsPag">
            <Pagination prevCallback={prevCallback} nextCallback={nextCallback} />
            {persons.map(item => {
                return (
                    <div key={item.id}>
                        <div className="charactersWrapper">
                        <img className="imgCharacter" src={item.image} />
                        <div className="infoWrapper">
                        <div className="nameCharacter">
                        {item.name}
                        </div>
                        <div className="characterStatus">Gender: {item.gender}</div>
                        <div className="characterStatus">Status: {item.status}</div>
                        <div className="characterSpecies">Species: {item.species}</div>
                        <div className="characterOrigin">Origin: {item.origin.name}</div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Characters