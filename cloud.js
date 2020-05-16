const AV = require("leancloud-storage");




console.log(AV.Cloud)

AV.Cloud.define("checkStatus", () => {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);
  const todoQuery = new AV.Query("TestObject");
  todoQuery
    // .greaterThan("due", now)
    // .lessThan("due", tomorrow)
    // .equalTo("completed", false)
    // .ascending("due")
    .find()
    .then(todos => {
      console.log('todos', todos)
    });
});