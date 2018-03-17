import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const WrappedInput = ({ input, label, type }) => (
    <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            {...input}
            placeholder={label}
            type={type}
        />
    </FormGroup>
)

WrappedInput.propTypes = {
}

WrappedInput.defaultProps = {
}

export default WrappedInput