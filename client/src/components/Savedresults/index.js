import React, { Component } from 'react'
import API from "../../utils/API"

class Savedresults extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {
        console.log(book);
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        
    }
    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.books.map((result, index) => (
                                <div key={index}>

                                    <div>
                                        <img alt={result.title} className="img-fluid" src={result.image} />
                                    </div>
                                    <div>
                                        <h5>{result.title} by {result.authors}</h5>
                                        <p>{result.description}</p>
                                    <div>
                                        <a href={result.link} target="_blank" >View</a>
                                        {/* conditional statement to see if _id exists and if so be a delete button instead */}
                                        <button onClick={() => this.handleSave(result)} >Save</button>
                                    </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Savedresults