import React from 'react'


const InputSearch = ({ setSearchLocation }) => {
    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }


    return (
        <form onSubmit={searchLocation}>
            <input type="text" placeholder='id Location 1-126' />
            <button><i className='bx bx-search-alt'></i></button>

        </form>
    )
}

export default InputSearch