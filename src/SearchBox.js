import React, { Component } from 'react';
import { Input } from 'antd';
import './SearchBox.css';

const { Search } = Input;

class SearchBox extends Component {
    render() {
        return (
            <section className="search_box">
                <Search 
                placeholder="포켓몬 이름을 입력하세요! ex)pidgey, kakuna, caterpie"
                onSearch={this.props.handleSearch}
                />
            </section>
        );
    }
}

export default SearchBox;