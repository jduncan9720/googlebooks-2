import React, { Component } from 'react'
import API from "../../utils/API"
import "./style.css"
class Savedresults extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        this.loadBooks()
    }

    handleSave = book => {
        console.log(book);
        API.saveBook(book)
            .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
            .catch(err => console.error(err));
    }

    handleDelete = book => {
        console.log(book);
        API.deleteBook(book._id)
            .then(deletedBook => {
                console.log("Made it")
                window.location.reload()
            })
            .catch(err => console.error(err));
    }

    loadBooks = () => {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div className = "container border">
                        <br />
                            {this.props.books.map((result, index) => (
                                <div key={index}>

                                    <div>
                                        <img alt={result.title} className="img-fluid" src={result.image} />
                                    </div>
                                    <br />
                                    <div>
                                        <h5>{result.title} by {result.authors}</h5>
                                        <p>{result.description}</p>
                                        <div className="leftbutton">
                                            <button><a href={result.link} >View</a></button>
                                        </div>
                                        <div className="rightbutton">
                                            {result._id
                                                ? <button onClick={() => this.handleDelete(result)} >Delete</button>
                                                : <button onClick={() => this.handleSave(result)} >Save</button>
                                            }
                                            <br />
                                            <br />
                                            <hr />
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