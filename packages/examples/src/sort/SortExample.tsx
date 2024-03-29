export const SortExample = () => {
  return (
    <>
      <ul class="child">
        <li class="dir">
          /src
          <ul class="child">
            <li class="dir">
              /backend
              <ul class="child">
                <li class="file">
                  app.ts<ul class="child file"></ul>
                </li>
                <li class="file">
                  package.json<ul class="child file"></ul>
                </li>
                <li class="file">
                  validation.ts
                  <ul class="child file">
                    <li class="func">validateUserData()</li>
                  </ul>
                </li>
                <li class="file">
                  oauth.ts
                  <ul class="child file">
                    <li class="func">handleOAuthLogin()</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dir">
              /frontend
              <ul class="child">
                <li class="file">
                  index.html<ul class="child file"></ul>
                </li>
                <li class="file">
                  main.ts
                  <ul class="child file">
                    <li class="func">initializeApp()</li>
                    <li class="func">fetchData()</li>
                  </ul>
                </li>
                <li class="file">
                  validation.ts
                  <ul class="child file">
                    <li class="func">validateFormInput()</li>
                  </ul>
                </li>
                <li class="file">
                  oauth.ts
                  <ul class="child file">
                    <li class="func">initiateOAuthFlow()</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dir">
          /dist<ul class="child"></ul>
        </li>
        <li class="file">
          tsconfig.json<ul class="child file"></ul>
        </li>
        <li class="file">
          package.json<ul class="child file"></ul>
        </li>
        <li class="dir">
          /node_modules<ul class="child"></ul>
        </li>
      </ul>
      ,
    </>
  );
};
