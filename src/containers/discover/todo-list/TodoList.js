import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import AppStyle from '../../../theme/styles';
import TodoListHelper from '../../../utils/TodoListHelper';
import TodoListItem from '../../../components/discover/todo-list/view/TodoListItem';
import DoneListTitle from '../../../components/discover/todo-list/view/DoneListTitle';

let notChangeList;
let changeList;
let changeState;
let changeBasic;

class TodoList extends Component {
  static componentName = 'TodoList';

  static propTypes = {
    data: PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.arrayOf(
        PropTypes.shape(
          PropTypes.string,
        ),
      ).isRequired,
    ).isRequired,
  };

  static defaultProps = {
    data: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      test: false,
    };
    this.getNotChangeList = val => (
       this.state.data.basic
        .filter(todo => todo.title !== val.title));

    this.getChangeList = val => (
       this.state.data.basic
        .filter(todo => todo.title === val.title)
        .map((value) => {
          changeState = value;
          changeState.state = !changeState.state;
          return changeState;
        }));

    this.change = (val) => {
      notChangeList = this.getNotChangeList(val);

      changeList = this.getChangeList(val);

      changeBasic = { basic: notChangeList.concat(changeList) };

      TodoListHelper.changeTodoState(
        TodoListHelper.key(this.props.data),
        changeBasic,
        result => (
          this.setState({ data: result })));
    };
  }

  componentDidMount() {
    TodoListHelper.init(
      TodoListHelper.key(this.props.data),
      this.props.data, result => (
        this.setState({ data: result })));
  }

  getTodoList() {
    return this.state.data.basic
      .filter(val => !val.state)
      .map(
        (val, index) => (
          <TodoListItem
            title={val.title}
            click={() => {
              this.change(val);
            }}
            key={val.id.concat(index)}
          />));
  }

  getDoneList() {
    return this.state.data.basic
      .filter(val => val.state)
      .map(
        (val, index) => (
          <TodoListItem
            checked
            title={val.title}
            click={() => {
              this.change(val);
            }}
            key={val.id.concat(index)}
          />));
  }


  render() {
    if (this.state.data !== null) {
      const todo = this.getTodoList();

      const done = this.getDoneList();

      return (
        <ScrollView style={[AppStyle.detailBasisStyle, { backgroundColor: null }]}>
          {todo}
          {
            (done.length !== 0)
              ? <DoneListTitle />
              : null
          }
          {done}
        </ScrollView>);
    }
    return null;
  }
}
export default TodoList;

