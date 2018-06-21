import React, { Component } from 'react';

class SearchInputText extends Component {
    render() {
        return (
            <div>
                <form className="animated bounceInUp">
                    <input className="custom-search" type="text" placeholder="Search" />
                </form>
            </div>
        );
    }
}

export default SearchInputText;