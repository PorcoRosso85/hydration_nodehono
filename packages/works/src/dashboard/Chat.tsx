const Chat = function () {
  const style = `
  .group:focus .group-focus\:flex {
    display: flex;
  }

  .max-w-xs {
    max-width: 20rem;
  }
  `;

  return (
    // <>
    //   <style>{style}</style>
    //   {/* Component Start */}
    //   <div class="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
    //     <a
    //       class="w-10 h-10 rounded-lg bg-gray-400 hover:bg-gray-500"
    //       href="#"
    //     />
    //     <a
    //       class="w-10 h-10 rounded-lg bg-gray-400 mt-4 shadow-outline border-4 border-gray-200"
    //       href="#"
    //     />
    //     <a
    //       class="relative w-10 h-10 rounded-lg bg-gray-400 mt-4 hover:bg-gray-500"
    //       href="#"
    //     >
    //       <span class="absolute w-3 h-3 rounded-full bg-blue-400 top-0 right-0 -mt-1 -mr-1" />
    //     </a>
    //     <a
    //       class="w-10 h-10 rounded-lg bg-gray-400 mt-4 hover:bg-gray-500"
    //       href="#"
    //     />
    //     <a
    //       class="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent mt-4 hover:bg-gray-400"
    //       href="#"
    //     >
    //       <svg
    //         class="w-6 h-6 fill-current"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    //   <div class="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-100">
    //     <button class="flex-shrink-0 relative text-sm focus:outline-none group">
    //       <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
    //         <span class="font-medium">Dropdown</span>
    //         <svg
    //           class="w-4 h-4"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </div>
    //       <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
    //         <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
    //           Menu Item 1
    //         </a>
    //         <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
    //           Menu Item 1
    //         </a>
    //         <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
    //           Menu Item 1
    //         </a>
    //       </div>
    //     </button>
    //     <div class="h-0 overflow-auto flex-grow">
    //       <div class="mt-3">
    //         <a
    //           class="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
    //           href="#"
    //         >
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    //             />
    //           </svg>
    //           <span class="ml-2 leading-none">Threads</span>
    //         </a>
    //         <a
    //           class="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
    //           href="#"
    //         >
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    //             />
    //           </svg>
    //           <span class="ml-2 leading-none font-bold">All DMs</span>
    //         </a>
    //         <a
    //           class="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
    //           href="#"
    //         >
    //           <span class="leading-none w-4">@</span>
    //           <span class="ml-2 leading-none">Mentions &amp; Reactions</span>
    //         </a>
    //         <a
    //           class="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
    //           href="#"
    //         >
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
    //             />
    //           </svg>
    //           <span class="ml-2 leading-none">Saved Items</span>
    //         </a>
    //         <a
    //           class="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
    //           href="#"
    //         >
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    //             />
    //           </svg>
    //           <span class="ml-2 leading-none">More</span>
    //         </a>
    //       </div>
    //       <div class="mt-4">
    //         <div class="flex items-center h-8 px-3 group">
    //           <button
    //             id="channels_toggle"
    //             class="flex items-center flex-grow focus:outline-none"
    //           >
    //             <svg
    //               class="w-4 h-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none font-medium text-sm">
    //               Channels
    //             </span>
    //           </button>
    //           <button class="items-center justify-center h-6 w-6 ml-auto rounded hidden group-hover:flex hover:bg-gray-300">
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    //               />
    //             </svg>
    //           </button>
    //           <button class="flex items-center justify-center h-6 w-6 ml-1 rounded hover:bg-gray-300">
    //             <svg
    //               class="h-5 w-5"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <div id="channels_list">
    //           <a
    //             class="flex items-center h-8 bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none font-bold">
    //               council-of-elrond
    //             </span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none">the-fellowship</span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none">and-another</span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none font-bold">
    //               second-breakfast-fans
    //             </span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none">anduril-smithy-club</span>
    //           </a>
    //         </div>
    //       </div>
    //       <div class="mt-4">
    //         <div class="flex items-center h-8 px-3 group">
    //           <button
    //             id="messages_toggle"
    //             class="flex items-center flex-grow focus:outline-none"
    //           >
    //             <svg
    //               class="w-4 h-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <span class="ml-2 leading-none font-medium text-sm">
    //               Direct Messages
    //             </span>
    //           </button>
    //           <button class="items-center justify-center h-6 w-6 ml-auto rounded hidden group-hover:flex hover:bg-gray-300">
    //             <svg
    //               class="h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    //               />
    //             </svg>
    //           </button>
    //           <button class="flex items-center justify-center h-6 w-6 ml-1 rounded hover:bg-gray-300">
    //             <svg
    //               class="h-5 w-5"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <div id="messages_list">
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <div class="flex justify-center w-4">
    //               <span class="w-2 h-2 rounded-full bg-blue-500" />
    //             </div>
    //             <span class="ml-2 leading-none font-bold">Frodo Baggins</span>
    //             <span class="flex items-center justify-center bg-blue-500 rounded-full font-medium h-5 px-2 ml-auto text-xs text-white">
    //               3
    //             </span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <div class="flex justify-center w-4">
    //               <span class="w-2 h-2 rounded-full bg-blue-500" />
    //             </div>
    //             <span class="ml-2 leading-none">Gandalf The Grey</span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <div class="flex justify-center w-4">
    //               <span class="w-2 h-2 rounded-full border-2 border-gray-500" />
    //             </div>
    //             <span class="ml-2 leading-none text-gray-500">
    //               Gimli son of Gloin
    //             </span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <div class="flex justify-center items-center rounded bg-gray-600 w-4 h-4">
    //               <span class="text-xs text-white">2</span>
    //             </div>
    //             <span class="ml-2 leading-none font-bold">Pippin, Merry</span>
    //             <span class="flex items-center justify-center bg-blue-500 rounded-full font-medium h-5 px-2 ml-auto text-xs text-white">
    //               1
    //             </span>
    //           </a>
    //           <a
    //             class="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
    //             href="#"
    //           >
    //             <div class="flex justify-center items-center rounded bg-gray-600 w-4 h-4">
    //               <span class="text-xs text-white">3</span>
    //             </div>
    //             <span class="ml-2 leading-none">Galadriel, Elrond, Arwen</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="flex flex-col flex-grow">
    //     <div class="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
    //       <div>
    //         <h1 class="text-sm font-bold leading-none">#council-of-elrond</h1>
    //         <span class="text-xs leading-none">
    //           Let's sort this ring thing out hey!?!
    //         </span>
    //       </div>
    //     </div>
    //     <div class="flex flex-col flex-grow overflow-auto">
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Sam</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Anyone know if Frodo is awake yet?</p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🤷</span>
    //               <span class="ml-1 font-medium">2</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex flex-col items-center mt-2">
    //         <hr class="w-full" />
    //         <span class="flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-full border text-xs font-semibold mx-auto">
    //           Today
    //         </span>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Elrond</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             Strangers from distant lands, friends of old. You have been
    //             summoned here to answer the threat of Mordor. Middle-Earth
    //             stands upon the brink of destruction. None can escape it. You
    //             will unite or you will fall. Each race is bound to this
    //             fate–this one doom. (gestures to the pedestal) Bring forth the
    //             Ring, Frodo.
    //           </p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>❤️</span>
    //               <span class="ml-1 font-medium">5</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Boromir</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">So it is true…</p>
    //           <p class="text-sm">
    //             It is a gift. A gift to the foes of Mordor. Why not use this
    //             Ring? (paces) Long has my father, the Steward of Gondor, kept
    //             the forces of Mordor at bay. By the blood of our people are your
    //             lands kept safe! Give Gondor the weapon of the Enemy. Let us use
    //             it against him!
    //           </p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>👎</span>
    //               <span class="ml-1 font-medium">1</span>
    //             </button>
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🤔</span>
    //               <span class="ml-1 font-medium">3</span>
    //             </button>
    //           </div>
    //           <div class="flex items-center mt-2">
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300" />
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1" />
    //             <a class="text-blue-600 text-xs font-medium ml-1" href="#">
    //               4 replies
    //             </a>
    //             <span class="text-xs text-gray-600 ml-1">
    //               Last reply today at 03:45
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Aragorn</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             You cannot wield it! None of us can. The One Ring answers to
    //             Sauron alone. It has no other master.
    //           </p>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Boromir</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             And what would a ranger know of this matter?
    //           </p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>😲</span>
    //               <span class="ml-1 font-medium">2</span>
    //             </button>
    //           </div>
    //           <div class="flex items-center mt-2">
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300" />
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1" />
    //             <a class="text-blue-600 text-xs font-medium ml-1" href="#">
    //               4 replies
    //             </a>
    //             <span class="text-xs text-gray-600 ml-1">
    //               Last reply today at 03:45
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Legolas</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             This is no mere ranger. He is Aragorn, son of Arathorn. You owe
    //             him your allegiance.
    //           </p>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Boromim</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Aragorn? This… is Isildur’s heir?</p>
    //           <div class="flex items-center mt-2">
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300" />
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1" />
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1" />
    //             <a class="text-blue-600 text-xs font-medium ml-1" href="#">
    //               3 replies
    //             </a>
    //             <span class="text-xs text-gray-600 ml-1">
    //               Last reply today at 03:45
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Boromir</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Gondor has no king. Gondor needs no king.</p>
    //           <div class="flex items-center mt-2">
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300" />
    //             <div class="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1" />
    //             <a class="text-blue-600 text-xs font-medium ml-1" href="#">
    //               4 replies
    //             </a>
    //             <span class="text-xs text-gray-600 ml-1">
    //               Last reply today at 03:45
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Gandalf</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Aragorn is right. We cannot use it.</p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>👍</span>
    //               <span class="ml-1 font-medium">6</span>
    //             </button>
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🧙‍</span>
    //               <span class="ml-1 font-medium">3</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Elrond</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             You have only one choice. The Ring must be destroyed.
    //           </p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>💍</span>
    //               <span class="ml-1 font-medium">1</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Gimli</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">What are we waiting for?</p>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Elrond</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             The Ring cannot be destroyed, Gimli, son of Gloin by any craft
    //             that we here possess. The Ring was made in the fires of Mount
    //             Doom. Only there can it be unmade. It must be taken deep into
    //             Mordor and cast back into the fiery chasm from whence it came.
    //           </p>
    //           <p class="text-sm">One of you must do this.</p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🗻</span>
    //               <span class="ml-1 font-medium">2</span>
    //             </button>
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🔥</span>
    //               <span class="ml-1 font-medium">3</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Boromir</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">
    //             One does not simply walk into Mordor. Its black gates are
    //             guarded by more than just orcs. There is evil there that does
    //             not sleep. And the great Eye is ever watchful. It is a barren
    //             wasteland riddled with fire and ash and dust. The very air you
    //             breathe is a poisonous fume. Not with ten thousand men could you
    //             do this. It is folly!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="h-12 bg-white px-4 pb-4">
    //       <div class="flex items-center border-2 border-gray-300 rounded-sm p-1">
    //         <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M13 10V3L4 14h7v7l9-11h-7z"
    //             />
    //           </svg>
    //         </button>
    //         <textarea
    //           class="flex-grow text-sm px-3 border-l border-gray-300 ml-1"
    //           style={{ resize: "none" }}
    //           placeholder="Message council-of-elrond"
    //           cols=""
    //           rows={1}
    //           defaultValue={""}
    //         />
    //         <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //           <span class="leading-none w-4 h-4 -mt-px">@</span>
    //         </button>
    //         <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //           <svg
    //             class="h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //           <svg
    //             class="h-4 w-4 transform rotate-90"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="flex flex-col flex-shrink-0 w-1/4 max-w-xs border-l border-gray-300 bg-gray-100">
    //     <div class="flex items-center h-16 border-b border-gray-300 px-4">
    //       <div class="">
    //         <h2 class="text-sm font-semibold leading-none">Thread</h2>
    //         <a class="text-xs leading-none" href="#">
    //           council-of-elrond
    //         </a>
    //       </div>
    //       <button class="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-300 ml-auto">
    //         <svg
    //           class="w-5 h-5"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M6 18L18 6M6 6l12 12"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div class="flex flex-col flex-grow overflow-auto">
    //       <div class="flex px-4 py-4 border-b border-gray-300">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Boromim</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Aragorn? This… is Isildur’s heir?</p>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Legolas</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">And heir to the throne of Gondor.</p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🤯</span>
    //               <span class="ml-1 font-medium">7</span>
    //             </button>
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🏰</span>
    //               <span class="ml-1 font-medium">2</span>
    //             </button>
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>👑</span>
    //               <span class="ml-1 font-medium">3</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Aragorn</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Havo dad Legolas.</p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>❓</span>
    //               <span class="ml-1 font-medium">1</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex px-4 py-3">
    //         <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300" />
    //         <div class="ml-2">
    //           <div class="-mt-1">
    //             <span class="text-sm font-semibold">Pippin</span>
    //             <span class="ml-1 text-xs text-gray-500">01:26</span>
    //           </div>
    //           <p class="text-sm">Is that elvish for second breakfast?</p>
    //           <div class="flex space-x-2 mt-1">
    //             <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
    //               <span>🍳</span>
    //               <span class="ml-1 font-medium">3</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="bg-gray-100 px-4 pb-3 mt-auto">
    //         <div class="flex flex-col items-center border-2 border-gray-300 rounded-sm p-1">
    //           <textarea
    //             class="w-full text-sm px-3 bg-transparent"
    //             style={{ resize: "none" }}
    //             placeholder="Reply…"
    //             cols=""
    //             rows={1}
    //             defaultValue={""}
    //           />
    //           <div class="flex w-full mt-2">
    //             <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //               <svg
    //                 class="h-4 w-4"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M13 10V3L4 14h7v7l9-11h-7z"
    //                 />
    //               </svg>
    //             </button>
    //             <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded ml-auto hover:bg-gray-200">
    //               <svg
    //                 class="h-4 w-4"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </button>
    //             <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //               <span class="leading-none w-4 h-4 -mt-px">@</span>
    //             </button>
    //             <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //               <svg
    //                 class="h-4 w-4"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </button>
    //             <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //               <svg
    //                 class="h-4 w-4"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </button>
    //             <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
    //               <svg
    //                 class="h-4 w-4 transform rotate-90"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Component End  */}
    // </>
    <>
      <div class="font-sans antialiased h-screen flex">
        {/* Sidebar / channel list */}
        <div class="bg-indigo-darkest text-purple-lighter flex-none p-4 hidden md:block">
          <div class="cursor-pointer mb-4">
            <div class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
              <img src="https://twitter.com/tailwindcss/profile_image" alt="" />
            </div>
            <div class="text-center text-white opacity-50 text-sm">⌘1</div>
          </div>
          <div class="cursor-pointer mb-4">
            <div class="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
              L
            </div>
            <div class="text-center text-white opacity-50 text-sm">⌘2</div>
          </div>
          <div class="cursor-pointer">
            <div class="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
              <svg
                class="fill-current h-10 w-10 block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-indigo-darker text-purple-lighter flex-none w-64 pb-6 hidden md:block">
          <div class="text-white mb-2 mt-3 px-4 flex justify-between">
            <div class="flex-auto">
              <h1 class="font-semibold text-xl leading-tight mb-1 truncate">
                Tailwind CSS
              </h1>
              <div class="flex items-center mb-6">
                <svg
                  class="h-2 w-2 fill-current text-green mr-2"
                  viewBox="0 0 20 20"
                >
                  <circle cx={10} cy={10} r={10} />
                </svg>
                <span class="text-white opacity-50 text-sm">Adam Wathan</span>
              </div>
            </div>
            <div>
              <svg
                class="h-6 w-6 fill-current text-white opacity-25"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="mb-8">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
              <div class="opacity-75">Channels</div>
              <div>
                <svg
                  class="fill-current h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </div>
            </div>
            <div class="bg-teal-dark py-1 px-4 text-white"># general</div>
          </div>
          <div class="mb-8">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
              <div class="opacity-75">Direct Messages</div>
              <div>
                <svg
                  class="fill-current h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </div>
            </div>
            <div class="flex items-center mb-3 px-4">
              <svg
                class="h-2 w-2 fill-current text-green mr-2"
                viewBox="0 0 20 20"
              >
                <circle cx={10} cy={10} r={10} />
              </svg>
              <span class="text-white opacity-75">
                Adam Wathan <span class="text-grey text-sm">(you)</span>
              </span>
            </div>
            <div class="flex items-center mb-3 px-4">
              <svg
                class="h-2 w-2 fill-current text-green mr-2"
                viewBox="0 0 20 20"
              >
                <circle cx={10} cy={10} r={10} />
              </svg>
              <span class="text-white opacity-75">David Hemphill</span>
            </div>
            <div class="flex items-center px-4 mb-6 opacity-50">
              <svg
                class="h-2 w-2 stroke-current text-white mr-2"
                viewBox="0 0 22 22"
              >
                <circle cx={11} cy={11} r={9} fill="none" strokeWidth={3} />
              </svg>
              <span class="text-white">Steve Schoger</span>
            </div>
          </div>
          <div>
            <div class="px-4 mb-2 text-white flex justify-between items-center">
              <div class="opacity-75">Apps</div>
              <div>
                <svg
                  class="fill-current h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Chat content */}
        <div class="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Top bar */}
          <div class="border-b flex px-6 py-2 items-center flex-none">
            <div class="flex flex-col">
              <h3 class="text-grey-darkest mb-1 font-extrabold">#general</h3>
              <div class="text-grey-dark text-sm truncate">
                Chit-chattin' about ugly HTML and mixing of concerns.
              </div>
            </div>
            <div class="ml-auto hidden md:block">
              <div class="relative">
                <input
                  type="search"
                  placeholder="Search"
                  class="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2"
                />
                <div class="absolute pin-y pin-l pl-3 flex items-center justify-center">
                  <svg
                    class="fill-current text-grey h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Chat messages */}
          <div class="px-6 py-4 flex-1 overflow-y-scroll">
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/steveschoger/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Steve Schoger</span>
                  <span class="text-grey text-xs">11:46</span>
                </div>
                <p class="text-black leading-normal">
                  The slack from the other side.
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/adamwathan/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Adam Wathan</span>
                  <span class="text-grey text-xs">12:45</span>
                </div>
                <p class="text-black leading-normal">
                  How are we supposed to control the marquee space without an
                  utility for it? I propose this:
                </p>
                <div class="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                  .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                  .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                  {"}"}
                </div>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/davidhemphill/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">David Hemphill</span>
                  <span class="text-grey text-xs">12:46</span>
                </div>
                <p class="text-black leading-normal">
                  <a
                    href="#"
                    class="inline-block bg-blue-lightest text-blue no-underline"
                  >
                    @Adam Wathan
                  </a>{" "}
                  the size of the generated CSS is creating a singularity in
                  space/time, we must stop adding more utilities before it's too
                  late!
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/steveschoger/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Steve Schoger</span>
                  <span class="text-grey text-xs">11:46</span>
                </div>
                <p class="text-black leading-normal">
                  The slack from the other side.
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/adamwathan/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Adam Wathan</span>
                  <span class="text-grey text-xs">12:45</span>
                </div>
                <p class="text-black leading-normal">
                  How are we supposed to control the marquee space without an
                  utility for it? I propose this:
                </p>
                <div class="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                  .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                  .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                  {"}"}
                </div>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/davidhemphill/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">David Hemphill</span>
                  <span class="text-grey text-xs">12:46</span>
                </div>
                <p class="text-black leading-normal">
                  <a
                    href="#"
                    class="inline-block bg-blue-lightest text-blue no-underline"
                  >
                    @Adam Wathan
                  </a>{" "}
                  the size of the generated CSS is creating a singularity in
                  space/time, we must stop adding more utilities before it's too
                  late!
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/steveschoger/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Steve Schoger</span>
                  <span class="text-grey text-xs">11:46</span>
                </div>
                <p class="text-black leading-normal">
                  The slack from the other side.
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/adamwathan/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Adam Wathan</span>
                  <span class="text-grey text-xs">12:45</span>
                </div>
                <p class="text-black leading-normal">
                  How are we supposed to control the marquee space without an
                  utility for it? I propose this:
                </p>
                <div class="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                  .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                  .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                  {"}"}
                </div>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/davidhemphill/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">David Hemphill</span>
                  <span class="text-grey text-xs">12:46</span>
                </div>
                <p class="text-black leading-normal">
                  <a
                    href="#"
                    class="inline-block bg-blue-lightest text-blue no-underline"
                  >
                    @Adam Wathan
                  </a>{" "}
                  the size of the generated CSS is creating a singularity in
                  space/time, we must stop adding more utilities before it's too
                  late!
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/steveschoger/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Steve Schoger</span>
                  <span class="text-grey text-xs">11:46</span>
                </div>
                <p class="text-black leading-normal">
                  The slack from the other side.
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/adamwathan/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Adam Wathan</span>
                  <span class="text-grey text-xs">12:45</span>
                </div>
                <p class="text-black leading-normal">
                  How are we supposed to control the marquee space without an
                  utility for it? I propose this:
                </p>
                <div class="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                  .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                  .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                  {"}"}
                </div>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/davidhemphill/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">David Hemphill</span>
                  <span class="text-grey text-xs">12:46</span>
                </div>
                <p class="text-black leading-normal">
                  <a
                    href="#"
                    class="inline-block bg-blue-lightest text-blue no-underline"
                  >
                    @Adam Wathan
                  </a>{" "}
                  the size of the generated CSS is creating a singularity in
                  space/time, we must stop adding more utilities before it's too
                  late!
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/steveschoger/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Steve Schoger</span>
                  <span class="text-grey text-xs">11:46</span>
                </div>
                <p class="text-black leading-normal">
                  The slack from the other side.
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/adamwathan/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Adam Wathan</span>
                  <span class="text-grey text-xs">12:45</span>
                </div>
                <p class="text-black leading-normal">
                  How are we supposed to control the marquee space without an
                  utility for it? I propose this:
                </p>
                <div class="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                  .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                  .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                  {"}"}
                </div>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/davidhemphill/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">David Hemphill</span>
                  <span class="text-grey text-xs">12:46</span>
                </div>
                <p class="text-black leading-normal">
                  <a
                    href="#"
                    class="inline-block bg-blue-lightest text-blue no-underline"
                  >
                    @Adam Wathan
                  </a>{" "}
                  the size of the generated CSS is creating a singularity in
                  space/time, we must stop adding more utilities before it's too
                  late!
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/steveschoger/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Steve Schoger</span>
                  <span class="text-grey text-xs">11:46</span>
                </div>
                <p class="text-black leading-normal">
                  The slack from the other side.
                </p>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/adamwathan/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">Adam Wathan</span>
                  <span class="text-grey text-xs">12:45</span>
                </div>
                <p class="text-black leading-normal">
                  How are we supposed to control the marquee space without an
                  utility for it? I propose this:
                </p>
                <div class="bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
                  .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                  .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                  {"}"}
                </div>
              </div>
            </div>
            {/* A message */}
            <div class="flex items-start mb-4 text-sm">
              <img
                src="https://twitter.com/davidhemphill/profile_image"
                class="w-10 h-10 rounded mr-3"
              />
              <div class="flex-1 overflow-hidden">
                <div>
                  <span class="font-bold">David Hemphill</span>
                  <span class="text-grey text-xs">12:46</span>
                </div>
                <p class="text-black leading-normal">
                  <a
                    href="#"
                    class="inline-block bg-blue-lightest text-blue no-underline"
                  >
                    @Adam Wathan
                  </a>{" "}
                  the size of the generated CSS is creating a singularity in
                  space/time, we must stop adding more utilities before it's too
                  late!
                </p>
              </div>
            </div>
          </div>
          <div class="pb-6 px-4 flex-none">
            <div class="flex rounded-lg border-2 border-grey overflow-hidden">
              <span class="text-3xl text-grey border-r-2 border-grey p-2">
                <svg
                  class="fill-current h-6 w-6 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                </svg>
              </span>
              <input
                type="text"
                class="w-full px-4"
                placeholder="Message #general"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Chat };
