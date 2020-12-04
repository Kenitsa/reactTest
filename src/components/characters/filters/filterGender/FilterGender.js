import React, {useState, useEffect} from 'react'
import './filterGender.css'

const FilterGender = ({onChangehendler}) => {
    const [gender, setGender] = useState('')

useEffect(() => {
    onChangehendler(gender)
}, [gender])

    return (
        <div className='genderFilter'>
            <div className="genderTittle">Gender:</div>
            <div className="genderItem"><input type="radio" id="Male" value="Male" name="gender" onChange={(e) => setGender(e.target.value)}/> Male </div>
            <div className="genderItem"> <input type="radio" id="Female" value="Female" name="gender" onChange={(e) => setGender(e.target.value)}/> Female </div>
            <div className="genderItem"> <input type="radio" id="genderless" value="genderless" name="gender" onChange={(e) => setGender(e.target.value)}/> Genderless </div>
            <div className="genderItem"><input type="radio" id="Unknown" value="Unknown" name="gender" onChange={(e) => setGender(e.target.value)}/> Unknown </div>
        </div>
    )
}

export default FilterGender