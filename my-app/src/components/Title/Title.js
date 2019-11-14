import React from 'react';
import PropTypes from  'prop-types';

// const Title = props => console.log('props', props) || (
//   <h1
//      style={{ backgroundColor: props.color }}
//   >
//     {props.text + '!'}
//     {props.children}
//   </h1>
// );


const Title = ({ text, color, children, arr }) => (
  <h1 style={{ backgroundColor: color }}>
    {text + '!'}
    {children}
    <span>
      {arr.map((el, inx) => (
        <i key={inx}>{el}</i>
      ))}
    </span>
  </h1>
);

Title.defaultProps = {
  text: '!!!',
  arr: [],
};

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string.isRequired,
  arr: PropTypes.arrayOf(PropTypes.number),
}


export default Title