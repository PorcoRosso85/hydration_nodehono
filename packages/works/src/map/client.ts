// Define the map syle (OpenStreetMap raster tiles)
const style = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap Contributors',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm', // This must match the source key above
    },
  ],
}

// Initialise the map
export const mapLibre = () => {
  window.addEventListener('DOMContentLoaded', () => {
    console.debug('client for mapLibre in /map')
    const map = new maplibregl.Map({
      container: 'map',
      style: style,
      center: [1, 15],
      zoom: 3,
    })

    // Add the navigation control
    map.addControl(new maplibregl.NavigationControl())
  })
}
