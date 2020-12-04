import React, {useState, useEffect} from 'react'
import './filterStatus.css'

const FilterStatus = ({onChangeStatus}) => {
    const [status, setGender] = useState('')

useEffect(() => {
    onChangeStatus(status)
}, [status])

    return (
        <div className='statusFilter'>
                <div className="statusTittle">Status:</div>
                <div className="statusItem"><input type="radio" id="alive" value="alive" name="status" onChange={(e) => setGender(e.target.value)}/> alive</div>
                <div className="statusItem"> <input type="radio" id="dead" value="dead" name="status" onChange={(e) => setGender(e.target.value)}/> dead</div>
                <div className="statusItem"> <input type="radio" id="unknown" value="unknown" name="status" onChange={(e) => setGender(e.target.value)}/> unknown</div>
        </div>
    )
}

export default FilterStatus