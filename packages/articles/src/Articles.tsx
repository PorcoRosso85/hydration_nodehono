const Articles = (props) => {
  return (
    <div class="relative mx-auto w-full max-w-container px-4 pt-12 sm:px-6 sm:pt-16 lg:flex lg:justify-between lg:px-8 lg:pt-20">
      <Left articles={props.articles} />
      <div class="bg-gray-100 mx-auto mt-20 min-w-0 max-w-[40rem] lg:ml-16 lg:mr-0 lg:mt-0 lg:max-w-[50rem] lg:flex-auto prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
        {/* 記事url + hx */}
        {props.articles.map((article) => (
            <div key={article.h3}>
              <h3 class="mt-12 text-xl font-semibold text-gray-400 mb-4" id={article.h3}>{article.h3}</h3>
              {article.p.map((paragraph, index) => (
                <p class="text-sm text-gray-500" key={index}>{paragraph}</p>
              ))}
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

export { Articles };
