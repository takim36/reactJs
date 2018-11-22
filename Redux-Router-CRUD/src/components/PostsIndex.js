import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component{
  componentDidMount() {
    console.log( this.props.posts);
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/post/create">
            Add a post
          </Link>
        </div>
      <h3>Posts</h3>
        { _.map(this.props.posts,(post) => {
          const link = `/post/${post.id}`;
          return <li className="list-group-item" key={post.id}><Link to={link}>{post.title}</Link></li>
        })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
