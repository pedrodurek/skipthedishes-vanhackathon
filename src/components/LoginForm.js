import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import PropTypes from 'prop-types'
import { If } from 'react-if'
import WrappedInput from './WrappedInput'

const LoginForm = ({ handleSubmit, handle, newUser, errorMsg }) => (
    <div>
        <If condition={errorMsg}>
            <span>{errorMsg}</span>
        </If>
        <Form onSubmit={handleSubmit(handle)}>
            <Field
                label="Email"
                name="email"
                type="text"
                component={WrappedInput}
            />
            <If condition={newUser}>
                <div>
                    <Field
                        label="Name"
                        name="name"
                        type="text"
                        component={WrappedInput}
                    />
                    <Field
                        label="Address"
                        name="address"
                        type="text"
                        component={WrappedInput}
                    />
                </div>
            </If>
            <Field
                label="Password"
                name="password"
                type="password"
                component={WrappedInput}
            />
        </Form>
    </div>
)

LoginForm.propTypes = {}

LoginForm.defaultProps = {}

export default reduxForm({
    form: 'initializeLoginForm',
    enableReinitialize: true
})(LoginForm)
