import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostShow extends React.Component {

  componentDidMount() {
    const {id} = this.props.match.params;    
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//ownProps is the props object inside the component
function mapStateToProps({ posts }, ownProps) {
  return {
    post: post[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchPost })(PostShow);