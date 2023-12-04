import { html } from 'hono/html'

export const ImageInCanvas = () => {
  return (
    <>
      <button type="button" onclick="imageCanvasEditor()">
        imageCanvasEditor
      </button>

      {html`<div x-data="imageCanvasEditor()" x-init="init()" @redraw.window="redraw" class="p-4">`}

      <div class="mb-4">
        <button class="bg-blue-200 mt-4 p-2" type="button" x-spread="trigger">
          Load image
        </button>
        <button class="bg-red-200 mt-4 p-2" type="button" x-spread="reseter">
          Reset
        </button>
      </div>

      {html`<canvas x-ref="canvas" x-bind.number:width="width" x-bind.number:height="height"></canvas>`}

      {html`</div>`}
    </>
  )
}

export const ScriptImageInCanvas = () => {
  return (
    <>
      {html`
       <script>
          console.debug("client for imageCanvasEditor()")
        function imageCanvasEditor() {
          return {
            width: 300,
            height: 300,
            context: null,
            image: null,
            imageUrl: 'http://placekitten.com/200/200',
            x: 0,
            y: 0,
            init() {
              this.context = this.$refs.canvas.getContext('2d')
              this.$nextTick(() => this.fillBackground())
            },
            reseter: {
              ['x-show']() {
                return this.image
              },
              ['@click']() {
                this.reset()
              },
            },
            trigger: {
              ['x-show']() {
                return !this.image
              },
              ['@click']() {
                this.drawImage()
              },
            },
            clear() {
              this.context.clearRect(0, 0, this.width, this.height)
              this.fillBackground()
            },
            drawImage() {
              this.image = new Image()
              this.image.src = this.imageUrl
              this.image.onload = () => {
                this.context.drawImage(this.image, this.x, this.y)
              }
            },
            fillBackground() {
              this.context.fillStyle = "#ebf8ff"
              this.context.fillRect(0, 0, this.width, this.height)
            },
            redraw() {
              this.clear()
              this.drawImage()
            },
            reset() {
              this.clear()
              this.image = null
              this.x = this.y = 0
            }
          }
        }
       </script> 
      `}
    </>
  )
}
