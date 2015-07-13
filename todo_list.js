// var newTodoList = function() {
// 	// ???
// };


// TodoList.prototype.add - function that takes a val and item as parameters.
// It creates a new Task object, passing in the parameters
// It adds the Task to the tasks array

function Task(item, val) {
  this.id = val;
  this.description = item;
  this.completed = false;
}

function TodoList(tasks) {
  if(!tasks) { tasks = []; }
  this.tasks = tasks;
  var counter = this.tasks.length;
}

TodoList.prototype.add = function (item, val) {
  this.tasks.push(new Task(item, val));
}

TodoList.prototype.list = function() {
  for (var i = 0; i < this.tasks.length; i++) {
    console.log("Task : " + JSON.stringify(this.tasks[i]) + "\n");
  }
}

TodoList.prototype.complete = function(taskname) {
  for (var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].description == taskname){
      this.tasks[i].completed = true;
    }
  }
}

TodoList.prototype.remove = function(taskObj) {
  for (var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i] === taskObj){
    this.tasks.splice(i, 1);
    }
  }
}

// Driver code

var cheese = new Task("cheese", 1);
var bread = new Task("bread", 2);
var groceryList = new TodoList([cheese, bread]);
groceryList.add("lettuce", 3);
groceryList.list();
groceryList.complete("lettuce");
bread.completed = false;
console.log(bread.completed);
