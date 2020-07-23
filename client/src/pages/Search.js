import React, { Component } from 'react'
import Seachbar from "../components/Searchform"
import Searchresults from "../components/Searchresults"

export default class Search extends Component {
    render() {
        return (
            <div>
                <Seachbar/>
                <Searchresults/>
            </div>
        )
    }
}