import React from 'react'


function Search({searchInput, setSearchInput}) {
    function handleChange(e) {
        setSearchInput(e.target.value);
    }
  return (
    <div>
        <input className= "inputStyles"  onChange={handleChange} type="text" placeholder=" 🔍 Search a movie ..." name="search" value={searchInput} />
    </div>

  )
}

export default Search