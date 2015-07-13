// var newTodoList = function() {
// 	// ???
// };


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

TodoList.prototype.list = function() {
  for (var i = 0; i < this.tasks.length; i++) {
    console.log("Task : " + JSON.stringify(this.tasks[i]) + "\n");
  }
}

TodoList.prototype.complete = function() {

}

// Driver code

var cheese = new Task("cheese", 1);
var bread = new Task("bread", 2);
var groceryList = new TodoList([cheese, bread]);
groceryList.list();
