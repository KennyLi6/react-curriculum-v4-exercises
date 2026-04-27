export default function Child({onIncrement}) {
  return <button onClick={() => {onIncrement()}}>Increment Counter</button>;
}

// Call the parent function when the button is clicked.