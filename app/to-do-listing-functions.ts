/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(asignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for (var task of taskCollection) {
      if(task.assignedTo === asignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
