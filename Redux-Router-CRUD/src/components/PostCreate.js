import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostCreate extends Component{

  renderField = (field) => {
    const { meta } = field;
    const { error, touched } = meta;

    const className = `form-group${error && touched ? ' has-danger':''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        {touched ? <div className="text-help"> {error} </div> : ''}
      </div>
    );
  };

  renderSelectField = (field) => {
    const { meta, options } = field;
    const { error, touched } = meta;

    const className = `form-group${error && touched ? ' has-danger':''}`;

    const fieidOptions = _.map(options, (option) => {
      return <option key={option.value} value={option.value}>{option.label}</option>
    });
    return (
      <div className={className}>
        <label>{field.label}</label>
        <select className="form-control" {...field.input}>
          {fieidOptions}
        </select>
        {touched ? <div className="text-help">{error} </div>: ''}
      </div>
    );
  };

  onSubmit = (values) => {
    this.props.createPost(values,() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit, pristine, touched, reset, submitting, error } = this.props
    return (
      <div>
        <h2>Create a new post</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}/>
          <div className="form-group">
            <label>Tags</label>
          <Field  className="form-control"
                  name="categories"
                  options={[
                      { "value":"", "label": "Choose" },
                      { "value":"sports", "label": "sports" },
                      { "value":"politics", "label": "politics" },
                      { "value":"media", "label": "media" }
                    ]}
                  component={this.renderSelectField} >
          </Field>
          </div>
          <Field name="content" label="Description" type="textarea" component={this.renderField}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        <button type="button" className="btn btn-info" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
    const errors = {};
 if(!values.title){
   errors.title = 'Enter a title';
 }
  if(!values.tags){
    errors.tags = 'Choose a tags';
  }
  if(!values.description){
    errors.description = 'Write some description of post';
  }
  return errors;
};


export default reduxForm({
  validate,
  form: 'PostCreateForm',
})(
  connect(null, { createPost })(PostCreate)
);
