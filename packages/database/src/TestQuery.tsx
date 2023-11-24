import { databaseConfig } from "./config";

export const TestQuery = () => {
  return (
    <>
      <h1>TestQuery</h1>
      {/* map the database object */}
      <EmailAdd />
    </>
  );
};

const EmailAdd = () => {
  return (
    <>
      <input name="email" type="email" placeholder="xxx@xxxx.com" />
      <button
        // TODO: register email
        hx-post={`${databaseConfig.routePrefix}/add`}
        // hx-post={`${config.routePrefix}/register`}
        hx-include="[name='email']"
        hx-target="#message"
        hx-swap="outerHTML"
      >
        register
      </button>
      {/* TODO: 自然と消えるように、下方の要素のジャマしないように */}
      <div id="message"></div>
    </>
  );
};
