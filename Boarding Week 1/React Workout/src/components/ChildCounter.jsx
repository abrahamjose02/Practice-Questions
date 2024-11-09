import PropTypes from "prop-types";

const ChildCounter = ({onCounterChange}) => {
  return (
    <div>
      Child Counter
      <button onClick={() => onCounterChange(1)}>Increment</button>
      <button onClick={() => onCounterChange(-1)}>Decrement</button>
    </div>
  )
}

ChildCounter.propTypes = {
    onCounterChange:PropTypes.func.isRequired,
}

export default ChildCounter
