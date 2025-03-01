function showMore(animal) {
    let info = "";
    switch (animal) {
      case "lion":
        info = "Lions are social animals, living in groups called prides. They are apex predators and primarily hunt large herbivores.";
        break;
      case "elephant":
        info = "Elephants are highly intelligent and have strong family bonds. They communicate using low-frequency sounds.";
        break;
      case "giraffe":
        info = "Giraffes use their long necks to reach leaves in tall trees. They have a unique walking pattern called 'pacing.'";
        break;
      default:
        info = "No additional information available.";
    }
    alert(info);
  }