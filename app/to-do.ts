class Task {
  done: boolean = false;
  constructor (public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}

class HomeTask extends Task {}

class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low"); //The super keyword extends the constructor of the parent class and instructs it to continue creating the class.
  }
}

var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);
