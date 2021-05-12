import React from 'react'
import PropTypes from 'prop-types'

const HealthBar = props => {
    const { value, max } = props;

    return <progress value={value} max={max} />
}

HealthBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};

HealthBar.defaultProps = {
    value: 100,
    max: 100
};

export default HealthBar;