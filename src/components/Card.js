import React from 'react'
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap'

const Card = ({ title, children, ...panel }) => (
    <Panel {...panel}>
        <Panel.Heading>
            <Panel.Title componentClass="h3">
                {title}
            </Panel.Title>
        </Panel.Heading>
        <Panel.Body>{children}</Panel.Body>
    </Panel>
)

Card.propTypes = {
}

Card.defaultProps = {
}

export default Card