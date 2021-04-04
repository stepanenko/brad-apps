import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)} />
          {' '}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right',
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
