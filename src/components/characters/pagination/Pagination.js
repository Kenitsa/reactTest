import React, { useCallback } from 'react'
import './pagination.css'

const Pagination = ({prevCallback, nextCallback}) => {
    return (
        <div className="charactersPagination">
            <button className='paginBtn' onClick={prevCallback}>1</button>
            <button className='paginBtn' onClick={nextCallback}>2</button>
        </div>
    )
}

export default Pagination