import React from 'react'
import {Field, reduxForm} from 'redux-form';

class PostNew extends React.Component {
  constructor(props) {
    super(props);
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Save</button>
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
})(PostNew);