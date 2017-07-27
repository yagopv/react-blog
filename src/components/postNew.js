import React from 'react'
import {Field, reduxForm} from 'redux-form';

class PostNew extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTitleField(field) {
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);