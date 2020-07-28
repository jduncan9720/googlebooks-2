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
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book.id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }
    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.books.map(result => (
                                <div key={result._id}>

                                    <div>
                                        <img alt={result.title} className="img-fluid" src={result.image} />
                                    </div>
                                    <div>
                                        <h5>{result.title} by {result.authors}</h5>
                                        <p>{result.description}</p>
                                    <div>
                                        <a href={result.link} target="_blank" >View</a>
                                        {/* <button onClick={() => this.handleSave(result)} >
                                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                        </button> */}
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