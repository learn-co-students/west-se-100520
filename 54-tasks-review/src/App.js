import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Filter from './Components/Filter' 
import TaskList from './Components/TaskList'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selectedCategory: 'All'
  }

  selectCategory = (selectedCategory) => {
    this.setState({ selectedCategory })
  }

  addTask = (newTask) => {
    this.setState(prevState => {
      return {tasks: [...prevState.tasks, newTask]}
    })
  }

  deleteTask = (task) => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.filter(taskEle => taskEle !== task)}
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Filter 
          categories={CATEGORIES}
          selectCategory={this.selectCategory}
          selectedCategory={this.state.selectedCategory} />
        <TaskList 
          tasks={this.state.tasks}
          selectedCategory={this.state.selectedCategory}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          />
      </div>
    );
  }
}


export default App;
