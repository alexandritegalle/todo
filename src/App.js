
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header'
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import uuid from 'uuid'
import { } from 'react-router' 
class App extends Component {
  state ={
    todos:[
      {
      id:uuid.v4(),
      title:'pickup the trash',
      completed:false
      },
      {
      id:uuid.v4(),
      title:'Meeting with boss',
      completed:false
      },
      {
      id:uuid.v4(),
      title:'pickup the letters',
      completed:false
      },
    ]
  }
  // toggle complete
  markComplete = (id) =>{
    //console.log(id)
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
      todo.completed = !todo.completed
      }
      return todo;
    })
    });
} 
// Delte todo
delTodo = (id) =>{
this.setState({ todos: [...this.state.todos.filter(todo => 
  todo.id !== id )]});
}
// Add todo
addTodo = (title) => {
  const newTodo = {
    id:uuid.v4(),
    title,
    completed:false
  }
  this.setState({todos: [...this.state.todos, newTodo] });
}
  render(){
    //console.log(this.state.todos)
  return(
  <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
            <Route path='/about' component={About} />
      </div>
    </div>
  </Router>
    
  );
  }
}

export default App;
