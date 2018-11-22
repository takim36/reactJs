import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component{
  componentDidMount() {
    if(!this.props.post) {
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick = () => {
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
   if(!post) {
     return <div>Loading ....</div>
   }
    const { id, title, categories, content } = post;
    const editLink = `/post/${id}/edit`;
    return (
      <div>
        <Link className="btn btn-info pull-xs-right" to={editLink}>Edit post</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick} >
        Delete
      </button>
        <h1>{title}</h1>
        <div>Categories: {categories}</div>
        <p>{content}</p>
        <Link to="/">Go back to list</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  deletePost: (id,callback) => dispatch(deletePost(id, callback)),
});


export default connect(mapStateToProps,mapDispatchToProps)(PostShow);
