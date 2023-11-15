import { config } from "./config";

export const TodoAdd = () => {
  // TODO: swap the target top of list
  return (
    <>
      <input name="content" type="text" />
      <input name="c2" type="text" />
      {/*  */}
      <button
        hx-post={`${config.routePrefix}/add`}
        hx-include='[name="content"], [name="c2"]'
        hx-swap="none"
      >
        add
      </button>
    </>
  );
};

export const EmailAdd = () => {
  return (
    <>
      <input name="email" type="email" />
      <button
        hx-post={`${config.routePrefix}/add/email`}
        hx-include="[name='email']"
        hx-swap="none"
      >
        register
      </button>
    </>
  );
};

export type todoItem = {
  id: string;
  user: string;
  content: string;
};

export const todoItemsData: todoItem[] = [
  {
    id: "00001",
    user: "001",
    content: "buy egg",
  },
];

export const TodoList = (props) => {
  return (
    <>
      {props.todoItemsData.map((item) => {
        return <TodoItem item={item} />;
      })}
    </>
  );
};

export const TodoItem = (props) => {
  return props.edit ? (
    <div>
      <input value={`{props.item.content}`} type="text" name="update" />
      <button hx-post={`${config.routePrefix}/save/${props.item.id}`}>S</button>
      <button hx-post={`${config.routePrefix}/cancel/${props.item.id}`}>
        C
      </button>
    </div>
  ) : (
    <div>
      {props.item.content}
      <button hx-delete={`${config.routePrefix}/delete/${props.item.id}`}>
        D
      </button>
      <button hx-post={`${config.routePrefix}/edit/${props.item.id}`}>E</button>
    </div>
  );
};
