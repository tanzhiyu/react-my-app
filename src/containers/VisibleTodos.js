import { connect } from 'react-redux'
import { VisibilityFilter } from '../actions'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos
    case VisibilityFilter.SHOW_ACTIVE: 
      return todos.filter(todo => !todo.completed)
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      throw new Error('unknown filter' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchtoProps = dispatch => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(TodoList)
