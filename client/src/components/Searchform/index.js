import React, { Component } from 'react'
import axios from "axios"

export default class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ""
        }
        this.handleChange=this.handleChange.bind(this)
    };

    handleChange(event) {
        this.setState({
            input:event.target.value
        })
    }

    bookSearch(event){
        event.preventdefault()
            this.setState({
                input: ""
            })
            //searchBooks route and add this.state.input as parameter
    }

    render() {
        return (
            <div id="searchBar">
                <input type="text" id="bookInput" placeholder="Book Title" size="100" onChange={this.handleChange} value={this.state.input}/>
                <button type="submit">Search</button>
            </div>
        )
    }
}
