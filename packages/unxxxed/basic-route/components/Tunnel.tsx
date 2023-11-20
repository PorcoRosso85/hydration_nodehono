export const Tunnel = (props) => {
  return (
    <section
      class="tunnels w-full h-screen sticky top-0"
      id="scroll-tunnel"
      style="perspective: 100px"
    >
      <div
        class="tunnel absolute top-0 left-0 w-screen h-screen"
        // override style.transform: translate
        style="transform-style: preserve-3d; transform: translateZ(-50px)"
      >
        <div
          class="absolute grid grid-rows-10 grid-cols-10 bg-indigo-400/70 gap-1"
          style="
            transform: rotateY(90deg);
            transform-origin: left;
            width: 100px;
            height: 100%;
            left: 0px;
            bottom: 0px;
          "
        ></div>
        <div
          class="absolute grid grid-rows-10 grid-cols-10 bg-indigo-400/70 gap-1"
          style="
            transform: rotateX(-90deg);
            transform-origin: top;
            width: 100%;
            height: 100px;
            left: 0px;
            top: 0px;
          "
        ></div>
        <div
          class="absolute grid grid-rows-10 grid-cols-10 bg-indigo-400/70 gap-1"
          style="
            transform: rotateY(-90deg);
            transform-origin: right;
            width: 100px;
            height: 100%;
            top: 0px;
            right: 0px;
          "
        ></div>
        <div
          class="absolute grid grid-rows-10 grid-cols-10 bg-indigo-400/70 gap-1"
          style="
            transform: rotateX(90deg);
            transform-origin: bottom;
            width: 100%;
            height: 100px;
            left: 0px;
            bottom: 0px;
          "
        ></div>
        <div
          class="panel absolute top-0 left-0 w-full h-full flex justify-center items-center bg-indigo-100/70"
          style="transform-style: preserve-3d; transform: translateZ(-100px)"
        >
          <span class="text-7xl font-semibold"> {props.text} </span>
        </div>
      </div>
    </section>
  );
};
