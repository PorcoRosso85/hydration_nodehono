import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'
import { html } from 'hono/html'
import { CancelAfterRequest } from './CancelAfterRequest'

const endpoint = '/about/works/htmx'
const endpoints = {
  root: '/',
  test: '/test',
  json01: '/json01',
  json02: '/json02',
}

const app = new Hono().basePath(endpoint)

app
  .get(endpoints.root, (c) =>
    c.html(
      <>
        <HtmxElement
          elt="button"
          method="get"
          url={`${endpoint}${endpoints.json01}`}
          id="element1"
          trigger="load"
        >
          1
        </HtmxElement>
        <br />
        <HtmxElement
          elt="button"
          method="get"
          url={`${endpoint}${endpoints.json02}`}
          id="element2"
          trigger="load"
        >
          2
        </HtmxElement>
        <div id="result" />

        {html`
        <script>
            // グローバル変数でデータを格納
            var dataFromElement1 = null;
            var dataFromElement2 = null;

            function updateResult() {
              if (dataFromElement1 && dataFromElement2) {
                  // 'message' キーの中身を統合する
                  var combinedData = {
                      message: {
                          ...dataFromElement1.message,
                          ...dataFromElement2.message
                      }
                  };
                  document.getElementById('result').innerText = JSON.stringify(combinedData);
              }
          }

            document.body.addEventListener('htmx:afterRequest', (event) => {
                console.debug("afterRequest");
                if (event.target.id === 'element1' || event.target.id === 'element2') {
                    var data = JSON.parse(event.detail.xhr.responseText);
                    if (event.target.id === 'element1') {
                        dataFromElement1 = data; // element1からのデータを更新
                    } else {
                        dataFromElement2 = data; // element2からのデータを更新
                    }
                    updateResult(); // 結果を更新
                }
            });
        </script>

    `}
      </>,
    ),
  )
  .get(endpoints.json01, (c) => c.json({ message: { id01: '0001' } }))
  .get(endpoints.json02, (c) => c.json({ message: { id02: '0002' } }))

export const htmxHonoApp = {
  endpoint: endpoint,
  app: app,
}
