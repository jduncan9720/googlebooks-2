import React from "react";

function Searchbar(props) {

        return (
            <div id="searchBar">
                <input 
                type="text" 
                id="bookInput" 
                placeholder="Book Title" 
                size="100" 
                onChange={props.handleChange} 
                value={props.search}
                />
                <button type="submit" onClick={props.handleFormSubmit}>
                Search
                </button>
            </div>
        )
    }

export default Searchbar