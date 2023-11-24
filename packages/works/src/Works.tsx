const Works = (props) => {
  return (
    <div class="relative mx-auto w-full max-w-container px-4 pt-12 sm:px-6 sm:pt-16 lg:flex lg:justify-between lg:px-8 lg:pt-20">
      <Left works={props.works} />
      <div class="mx-auto mt-20 min-w-0 max-w-[40rem] lg:ml-16 lg:mr-0 lg:mt-0 lg:max-w-[50rem] lg:flex-auto prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
        {props.works.map((work) => (
          <div class="bg-gray-200" style={"height: 1200px"}>
            <div key={work.h3}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Works };

const Left = (props) => {
  return (
    <div class="mx-auto max-w-[40rem] lg:mx-0 lg:max-w-none lg:flex-none">
      <ul
        role="list"
        class="space-y-10 text-sm leading-6 text-slate-700 lg:sticky lg:top-0 lg:-mt-16 lg:h-screen lg:w-72 lg:overflow-y-auto lg:py-16 lg:pr-8 lg:[mask-image:linear-gradient(to_bottom,transparent,white_4rem,white)]"
      >
        {props.works.map((work) => (
          <li>
            <a href={`#${work.h3}`}>{work.h3}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const works = [
  {
    h3: "payment system",
    p: ["checkout", "success"],
  },
];
