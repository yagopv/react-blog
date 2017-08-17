import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostShow extends React.Component {

  componentDidMount() {
    const {id} = this.props.match.params;    
    this.props.fetchPost(id);
  }

  helperFunction() {
    this.props.posts[this.props.match.params.id];
  }

  render() {
    return (
      <div>
        {console.log(helperFunction())}
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