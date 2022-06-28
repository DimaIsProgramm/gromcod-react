import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, deleteTask, updateTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatuChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  hanldeTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list ">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.hanldeTaskDelete}
              onChange={this.handleTaskStatuChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
