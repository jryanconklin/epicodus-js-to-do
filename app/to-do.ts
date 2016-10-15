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

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string) {
    super(description, priority);
  }
}

var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date(); //This uses the JavaScript date built in function to get the current date and store it as a variable.

var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);

var nextDay = today;
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, 'Update blog', 'High'));
tasks.push(new WorkTask(today, 'Go to meeting', 'Medium'));
tasks.push(new WorkTask(today, 'Clean ceiling', 'Low'));

console.log(tasks);
