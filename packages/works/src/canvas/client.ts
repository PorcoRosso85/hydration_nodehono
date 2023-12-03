export function imageCanvasEditor() {
  console.debug('client for imageCanvasEditor')
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
      this.context.fillStyle = '#ebf8ff'
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
    },
  }
}
