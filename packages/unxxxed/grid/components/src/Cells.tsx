export const Cells = () => {
  const style = `
  #grid {
    display: grid;
    grid-template-columns: repeat(10, 50px);
    grid-template-rows: repeat(10, 50px);
}
.grid-item {
    border: 1px solid #ccc;
    background-color: #f9f9f9;
}
.draggable {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    cursor: move;
}
      `;

  return (
    <>
      <title>Drag and Drop Grid</title>
      <style>{style}</style>
      <div id="grid"></div>
      <div class="draggable" draggable="true"></div>
    </>
  );
};
