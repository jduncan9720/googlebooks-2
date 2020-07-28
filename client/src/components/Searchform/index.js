import React from "react";

function Searchform(props) {

    return (
        <div id="searchBar">
            <label htmlFor="search"><h2>Search for and save Books of Interest</h2></label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search a Book"
                id="search"
            />
            <button type="submit" onClick={props.handleFormSubmit}>
                Search
                </button>
        </div>
    )
}

export default Searchform