import React from 'react';
import PropTypes from 'prop-types';

const FeedbackEmpty = ({title}) => (
    <p>{title}</p>
);
export default FeedbackEmpty;

//========================== propTypes ===================
FeedbackEmpty.propTypes = {
  title: PropTypes.string.isRequired
};
