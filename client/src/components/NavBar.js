import React, { Component } from 'react'
import axios from 'axios';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    filterData (posts,searchKey) {
        const result = posts.filter((post) =>
            post.topic.includes(searchKey)
        )
        this.setState({posts:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/post").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts,searchKey)
            }
        });
    }

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href='/'>Posts</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}