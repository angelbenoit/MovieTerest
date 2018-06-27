import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchInputText extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ""}`

        return (
            <div className={className}>
                <input
                    className="custom-search"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ""}
                </div>

            </div>
        )
    }
    render() {
        return (
            <div>
                <form className="animated bounceInUp">
                    <Field
                        name="query"
                        component={this.renderField}
                    />

                </form>
            </div>
        );
    }
}

function validate(values) {
    const error = {};
    if (!values.query)
        error.query = "Enter a title!";

    return error;
}
export default reduxForm({
    validate,
    form: 'customQuery'
})(SearchInputText);