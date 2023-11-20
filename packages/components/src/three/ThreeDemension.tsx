export const ThreeDemension = () => {
  return (
    <>
      <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
      <div style={{ width: "100%", height: "600px" }}>
        <a-scene embedded>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere
            position="0 1.25 -5"
            radius="1.25"
            color="#EF2D5E"
          ></a-sphere>
          <a-cylinder
            position="1 0.75 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D"
          ></a-cylinder>
          <a-plane
            position="0 0 -4"
            rotation="-90 0 0"
            width="4"
            height="4"
            color="#7BC8A4"
          ></a-plane>
          <a-sky color="#ECECEC"></a-sky>
        </a-scene>
      </div>
      <div>
        <a-scene embedded>
          <a-assets>
            <audio
              id="click-sound"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
            ></audio>

            <img
              id="city"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"
            />
            <img
              id="city-thumb"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"
            />
            <img
              id="cubes"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"
            />
            <img
              id="cubes-thumb"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"
            />
            <img
              id="sechelt"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
            />
            <img
              id="sechelt-thumb"
              src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"
            />
          </a-assets>

          <a-sky id="image-360" radius="10" src="#city"></a-sky>

          <a-entity class="link"></a-entity>

          <a-camera>
            <a-cursor
              id="cursor"
              animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
              animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
              animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"
            ></a-cursor>
          </a-camera>
        </a-scene>
      </div>
      <div>
        <a-scene embedded>
          <a-box
            id="targetObject"
            position="-1 0.5 -3"
            rotation="0 45 0"
            color="#4CC3D9"
          >
            <a-camera position="0 0 5"></a-camera>
          </a-box>
        </a-scene>
      </div>
    </>
  );
};
