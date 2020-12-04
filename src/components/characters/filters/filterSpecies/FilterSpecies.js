import React, {useState, useEffect} from 'react'
import './filterSpecies.css'

const FilterSpecies = ({onChangeSpecies}) => {
    const [species, setGender] = useState('')

useEffect(() => {
    onChangeSpecies(species)
}, [species])

    return (
        <div className='speciesFilter'>
            <div className="speciesTittle">Species:</div>
            <div className="speciesItem"><input type="radio" id="Human" value="Human" name="species" onChange={(e) => setGender(e.target.value)}/> Human </div>
            <div className="speciesItem"> <input type="radio" id="Alien" value="Alien" name="species" onChange={(e) => setGender(e.target.value)}/> Alien </div>
            <div className="speciesItem"> <input type="radio" id="Mythological Creature" value="Mythological Creature" name="species" onChange={(e) => setGender(e.target.value)}/> Mythological Creature </div>
            <div className="speciesItem"><input type="radio" id="Robot" value="Robot" name="species" onChange={(e) => setGender(e.target.value)}/> Robot </div>
            <div className="speciesItem"><input type="radio" id="unknown" value="unknown" name="species" onChange={(e) => setGender(e.target.value)}/> unknown </div>
            <div className="speciesItem"> <input type="radio" id="Humanoid" value="Humanoid" name="species" onChange={(e) => setGender(e.target.value)}/> Humanoid </div>
            <div className="speciesItem"> <input type="radio" id="Disease" value="Disease" name="species" onChange={(e) => setGender(e.target.value)}/> Disease </div>
        </div>
    )
}

export default FilterSpecies