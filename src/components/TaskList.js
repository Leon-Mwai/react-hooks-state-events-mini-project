import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory = "All", onDeleteTask }) {
  const visibleTasks = tasks.filter((task) => 
    selectedCategory === "All" || task.category === selectedCategory
  );


  return (
    <div className="tasks">
      {visibleTasks.map((task) => (
        <Task 
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

