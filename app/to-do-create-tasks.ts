/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date(); //This uses the JavaScript date built in function to get the current date and store it as a variable.

var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, 'Update blog', 'High', people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, 'Go to meeting', 'Medium', people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(today, 'Clean ceiling', 'Low', people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
for(var task of thorTasks) {
  console.log(task);
}
