module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;
  }

  export interface IPerson {
    name: string;
    email: string;
    phone?: string; //Phone Number - Optional
  }

  export class Task implements ITask {
    done: boolean = false;
    constructor (public description: string, public priority: string, public assignedTo?: IPerson) {}
    markDone() {
      this.done = true;
    }
  } //End Task

  export class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson) {
      super(description, priority);
    }
  } //End HomeTask

  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo?: IPerson) {
      super(description, priority);
    }
  } //End WorkTask

  export class HobbyTask extends Task {
    constructor(public description: string) {
      super(description, "low"); //The super keyword extends the constructor of the parent class and instructs it to continue creating the class.
    }
  } //End HobbyTask

} // End Module
