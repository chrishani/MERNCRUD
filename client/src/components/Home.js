import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePost();
    }

    retrievePost() {
        axios.get("/post").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts);
            }
        });
    }

    render() {
        return (
            <div className="container">
                <p>All posts</p>
                <table className="table">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Description</th>
                        <th scope="col">Post Category</th>
                        <th scope="col">Action</th>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                                        {posts.topic}
                                    </a>
                                </td>
                                <td>{posts.description}</td>
                                <td>{posts.postCategory}</td>
                                <td>
                                    <a className="btn btn-warning" href="#">
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#">
                                        <i class="fas fa-trash"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-success"><a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Create a new post</a></button>
            </div>
        )
    }
}
