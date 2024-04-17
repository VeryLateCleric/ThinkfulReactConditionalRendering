import React from "react";

function Clock() {
  // Write your code here.
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let timeOfDay;
  if (currentHour < 12) {
    timeOfDay = "Good Morning!";
  } else if (currentHour < 18) {
    timeOfDay = "Good Afternoon!";
  } else {
    timeOfDay = "Good Evening!";
  }

  return <div>{timeOfDay}</div>;
}

export default Clock;
