const FROGS = 3;

// use a for loop to carry out a function on each frog we have
for (let x = 1; x <= FROGS; x++) {
  // create a lane (<li>) for each frog
  const lane = document.createElement("li");
  // give each lane an id
  lane.id = `lane ${x}`;
  // create a <span> for each frog
  const number = document.createElement("span");
  // add the lane number to the span
  number.innerText = x;
  // append the span to the lane
  lane.appendChild(number);
  // append the lane to the track
  track.appendChild(lane);
}
// declare a variable called racers and assign a value of: empty array
const racers = [];
// write a for loop
for (let x = 0; x < FROGS; x++) {
  // push a frog from frogstable into racers array
  racers.push(frogstable[x]);
}

// loop over each element in the racers array and carry out a function on each
racers.forEach(function (racer, id) {
  // create a span to represent each racer
  const frogRacer = document.createElement("span");
  // add racing numbers to their respective spans
  frogRacer.innerText = `${racer.number}`;
  // append the spans in the lanes (id + 1 because id starts at 0)
  document.getElementById(`lane ${id + 1}`).appendChild(frogRacer);
  // assign the racer the background color defined in it's object from frogStable.js
  frogRacer.style.background = racer.color;
  // add a class of 'frog' to each of the frogs so that we can style them
  frogRacer.classList.add("frog");
  // i circled back from the final stages of the exercise to assign each racer an id
  frogRacer.id = "raceFrog-" + racer.number;
  // create a span for the frog name
  const frogName = document.createElement("span");
  // give the frog name span a class
  frogName.classList.add("frog-name");
  // give the frog name span inner text of the racer's name (re: frogStable)
  frogName.innerText = `${racer.name}`;
  // append the frogName to the lane (id + 1 because id starts at 0)
  document.getElementById(`lane ${id + 1}`).appendChild(frogName);
  // set each frog's progress inside it's object, inside the racers array
  racers[id].progress = 0;
  // set each frog's lane inside it's object, inside the racers array (id + 1 because id starts at 0)
  racers[id].lane = `lane ${id + 1}`;
});

function racingFrog(racer) {
  const trackWidth = track.offsetWidth;
  //declare a variable called hop and assign it a setInterval (hopeLength relative to trackWidth per one second/1000ms)
  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    // racer progress is equal to the accumulated hops
    racer.progress += hopLength;
    // print the racer's progress to the console with each hop
    console.log(`${racer.name} is at ${racer.progress}`);
    // if the racer's progress exceeds 100% of the track
    if (racer.progress >= 100) {
      // stop the interval function
      clearInterval(hop);
      // print the racer having finished to the console
      console.log(`${racer.name} has finished!`);
    }
    // circled back and assigned each racer an id
    // targeted the id
    document.getElementById(
      "raceFrog-" + racer.number
      // modified the left syle and made it equal pecentage-wise to the racer's progress
    ).style.left = `${racer.progress}%`;
    // math.random implemented here (as above for hop length) to determine hop speed for the individual frogs
  }, Math.random() * 1000);
}
// calling the function that starts the race
racers.forEach(racingFrog);
