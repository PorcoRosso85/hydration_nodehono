const Profile = (props) => {
  return (
    <div class="relative mx-auto w-full max-w-container px-4 pt-12 sm:px-6 sm:pt-16 lg:flex lg:justify-between lg:px-8 lg:pt-20">
      <Left articles={props.articles} />
      <div class="mx-auto mt-20 min-w-0 max-w-[40rem] lg:ml-16 lg:mr-0 lg:mt-0 lg:max-w-[50rem] lg:flex-auto prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
        {props.articles.map((article) => (
          <div class="bg-gray-200" style={"height: 1200px"}>
            <div key={article.h3}>
              <h3 id={article.h3}>{article.h3}</h3>
              {article.p.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Left = (props) => {
  return (
    <div class="mx-auto max-w-[40rem] lg:mx-0 lg:max-w-none lg:flex-none">
      <ul
        role="list"
        class="space-y-10 text-sm leading-6 text-slate-700 lg:sticky lg:top-0 lg:-mt-16 lg:h-screen lg:w-72 lg:overflow-y-auto lg:py-16 lg:pr-8 lg:[mask-image:linear-gradient(to_bottom,transparent,white_4rem,white)]"
      >
        {props.articles.map((article) => (
          <li>
            <a href={`#${article.h3}`}>{article.h3}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div class="h-[600px] bg-white flex flex-col justify-center items-center">
      <div class="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
        <div class="flex gap-4">
          <input
            name="first-name"
            type="text"
            placeholder="first-name"
            class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          />
          <input
            name="last-name"
            type="text"
            placeholder="last-name"
            class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <input
          name="message"
          type="text"
          placeholder="message"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
        <button
          hx-post="/about/contact"
          hx-include="[name='email'], [name='first-name'], [name='last-name'], [name='message']"
          hx-swap="none"
          class="w-full bg-black text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800 focus:outline-none"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export { Profile, Contact };

export const articles = [
  {
    h3: "greeting1",
    p: ["hi", "nice to meet you"],
  },
  {
    h3: "greeting2",
    p: ["hi", "nice to meet you"],
  },
  {
    h3: "greeting3",
    p: ["hi", "nice to meet you"],
  },
  {
    h3: "greeting4",
    p: ["hi", "nice to meet you"],
  },
];
