import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

export default class Paginat extends Component {
    constructor() {
      super();
      this.state = {
      //  todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      todos:[{
          a:'q',
          b:'r',
          c:'s',
          d:'t'
      }],
        currentPage: 1,
        todosPerPage: 3
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { todos, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = Object.keys(todos[0]).slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((todo, index) => {
        return <tr key={index}><td>{todos[0][todo]}</td><td> hhhh</td></tr>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(Object.keys(todos[0]).length / todosPerPage); i++) {
        pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
      }
  
      return (
        <div>
            {pageNumbers}
  <table>
            {renderTodos}
        </table>
        </div>
      );
    }
  }
  