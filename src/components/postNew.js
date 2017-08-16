import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostNew extends React.Component {
  constructor(props) {
    super(props);
  }

  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {    
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  //Validate values
  if (!values.title || (values.title && values.title.length < 3)) {
    errors.title = "Enter a title that is at least 3 characters";
  }

  if (!values.categories) {
    errors.categories = "Enter a title";
  }
  
  if (!values.content) {
    errors.content = "Enter a title";
  }  
  //If errors empty then the form is ok
  //If errors contain propertys then Redux Form assumes the form is invalid
  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  validate
})(
  connect(null, { createPost })(PostNew)
);