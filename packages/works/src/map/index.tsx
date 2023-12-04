import { html } from 'hono/html'

export const Maplibre = () => {
  return (
    <>
      <button type="button" onclick="mapLibre()">
        mapLibre
      </button>
      <div id="map" class="w-full h-full" />
      <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" />
      <style>
        {html`
            body {
                margin: 0;
              }
              
              #map {
                width: 100vw;
                height: 100vh;
              } 
        `}
      </style>
      <script src="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js" />
      {html`
          <script>
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
            const mapLibre = () => {
                console.debug('client for mapLibre in /map')
                const map = new maplibregl.Map({
                  container: 'map',
                  style: style,
                  center: [1, 15],
                  zoom: 3,
                })

                // Add the navigation control
                map.addControl(new maplibregl.NavigationControl())
              }

          </script>
      `}
    </>
  )
}
