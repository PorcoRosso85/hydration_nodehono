import { config } from "./config";

export const TodoAdd = (props) => {
  return props.error !== "true" ? (
    <div hx-target="this" hx-swap="outerHTML">
      <input name="id" type="number" placeholder="id" />
      <br />
      <input
        name="content"
        type="text"
        placeholder="content"
        value={`${props.inputedContent}`}
      />
      <br />
      <input name="user" type="text" placeholder="user" />
      <br />
      <button
        hx-post={`${config.routePrefix}/add`}
        hx-include='[name="id"], [name="content"], [name="user"]'
      >
        add
      </button>
    </div>
  ) : (
    <div hx-target="this" hx-swap="outerHTML">
      <input name="id" type="number" placeholder="id" />
      <br />
      <input
        name="content"
        type="text"
        placeholder="content"
        value={`${props.inputedContent}`}
      />
      <span style="color: red">{props.errorMessage}</span>
      <br />
      <input name="user" type="text" placeholder="user" />
      <br />
      <button
        hx-post={`${config.routePrefix}/add`}
        hx-include='[name="id"], [name="content"], [name="user"]'
      >
        add
      </button>
    </div>
  );
};

export const EmailAdd = () => {
  return (
    <>
      <input name="email" type="email" placeholder="xxx@xxxx.com" />
      <button
        // TODO: register email
        hx-post={`${config.routePrefix}/add/email`}
        // hx-post={`${config.routePrefix}/register`}
        hx-include="[name='email']"
        hx-swap="none"
      >
        register
      </button>
    </>
  );
};

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
