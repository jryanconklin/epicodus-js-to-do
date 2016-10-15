var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        _super.apply(this, arguments);
    }
    return HomeTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low"); //The super keyword extends the constructor of the parent class and instructs it to continue creating the class.
        this.description = description;
    }
    return HobbyTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        _super.call(this, description, priority);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
    return WorkTask;
}(Task));
var tasks = [];
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
