import React, { useRef, FC, useState } from 'react';
import './index.less';
import { useAppSelector, useAppDispatch } from 'store';
import { addTodo, getTodoList } from 'store/todos';

let id = 2;

const Demo: FC = () => {
  const { todos } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const onAdd = () => {
    if (!inputRef.current) return;

    const value = inputRef.current.value;

    if (value) {
      dispatch(
        addTodo({
          text: value,
          id: ++id,
          completed: false
        })
      );

      inputRef.current.value = '';
    } else {
      inputRef.current.focus();
    }
  };

  const onLoadMore = async () => {
    setLoading(true);
    await dispatch(getTodoList(1000));
    setLoading(false);
  };

  return (
    <div className="home-page">
      <h3>This is Home Page.</h3>
      <input className="classes-add-input" ref={inputRef} />
      <button className="classes-add-btn" onClick={onAdd}>
        CREATE
      </button>
      <br />
      <ul className="classes-list">
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <br />
      {loading ? (
        <span>Loading...</span>
      ) : (
        <button className="classes-load-btn" onClick={onLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Demo;
