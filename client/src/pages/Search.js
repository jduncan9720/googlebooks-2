import React from "react";
import Searchform from "../components/Searchform";
import Savedresults from "../components/Savedresults";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    // componentDidMount() {
    //     this.searchBook();
    // }

    makeBook = bookData => {
        return {
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBooks(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Searchform
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <br />
                <div className="container">
                    <Savedresults books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;