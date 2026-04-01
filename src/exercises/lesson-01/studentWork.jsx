//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = "Kenny Li"
  const age = 22
  const city = "San Francisco"
  const hobbies = [
    "Playing games",
    "Hanging out with friends"
  ]
  return (
    <div>
      {/* add JSX here */}
      <h1>About {name}</h1>
      <p>
        I am {name}, I am {age}, and I currently reside in {city}.<br />
        I graduated from UC Santa Cruz with a B.S. in Computer Science: Game Design in June 2025.<br />
        A few of my hobbies: <br />
        
      </p>
      <ul>{hobbies.map((hobby) => (<span key={hobby}>{hobby}{<br />}</span>))}</ul>
    </div>
  );
}
