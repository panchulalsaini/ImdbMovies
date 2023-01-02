import React from 'react'

import { useGlobalContext } from '../Context/Context'
function Search() {
    const { query, setQuery } = useGlobalContext()
    return (
        <>
            <div className='Search'>
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type="text"
                        placeholder="Enter Movie Name "
                        value={query}
                        onChange = {(e) => { setQuery(e.target.value) }}
                    />
                </form>
            </div>
        </>
    )
}

export default Search;
