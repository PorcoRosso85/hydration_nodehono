export const Sortable = (props) => {
  const style = `
  * {
  font-family: Consolas, 'Courier New', monospace;
}
ul, ol {
  list-style-type: none;
}
.truncate {
  width: 20px;  /* この数値は必要に応じて調整 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.truncate:hover {
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
}
    .child {
      min-width: 30%;
    }
    .dir {
      padding: 10px;
      background-color: gray
    }
    .file {
      display: flex;
      flex: none;
      padding: 10px;
      background-color: lightgray
    }
    .func {
      padding: 10px;
      background-color: white
    }
    .highlight {
      border: 2px dashed #0082fc;
      background-color: #e0f7fa;
    }
    .dir:hover,
    .file:hover {
      background-color: darkgray;
    }
    .line {
      position: absolute;
      width: 1px;
      background-color: black;
      transform-origin: 0 0;
    }
    #dependency-lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .dependency-line {
      stroke: black;
      stroke-width: 2;
    }
`;

  return (
    <>
      <style>{style}</style>
      <ul class="child">{props.children}</ul>
      <ScriptElt />
    </>
  );
};

export const ScriptElt = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
      var nestedSortables = document.querySelectorAll(".child");
      for (var i = 0; i < nestedSortables.length; i++) {
        new Sortable(nestedSortables[i], {
          group: "child",
          animation: 100,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          onChoose: function (evt) {
            evt.item.classList.add("highlight");
          },
          onUnchoose: function (evt) {
            evt.item.classList.remove("highlight");
          },
        });
      }
    `,
      }}
    ></script>
  </>
);

const AddNewNode = () => {
  return (
    <form
      hx-post="/example/htmx/add"
      hx-target="#added"
      hx-swap="outerHTML"
      _="on htmx:afterRequest reset() me"
    >
      <input name="title" type="text" />
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 text-center"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export const DeleteButton = (id: any) => {
  return (
    <button style="" hx-delete={`/example/htmx/:id`} hx-target={`#${id}`}>
      DEL
    </button>
  );
};

export const ListItem = ({ id, title }: { id: string; title: string }) => {
  return (
    <li class="dir" id={`${id}`}>
      {title} / {id} / <DeleteButton id={`${id}`} />
      <ul class="child"></ul>
      <div id="added"></div>
    </li>
  );
};
