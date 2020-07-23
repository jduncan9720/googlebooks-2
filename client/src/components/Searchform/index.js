import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div id="searchBar">
                <input type="text" id="bookInput" placeholder="Book Title" size="100"></input> 
                <button type="submit">Search</button>
            </div>
        )
    }
}
