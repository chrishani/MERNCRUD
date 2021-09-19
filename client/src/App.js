import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
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
    axios.get("http://localhost:8000/post").then(res => {
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
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{posts.topic}</td>
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
      </div>
    )
  }
}
