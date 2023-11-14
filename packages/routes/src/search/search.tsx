import { Hono } from "hono";
import {
  SearchInput,
  SearchResults,
} from "../../../components/src/search/Search";
import {
  addIds,
  contactsListData,
} from "../../../components/src/search/data/searchTargetData";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <SearchInput />
        {/* TODO: query問わず、getでresultを取るだけにする、ロジックをここに持ち込まない */}
        <SearchResults targetData={addIds(contactsListData)} query="" />
      </>
    );
  })
  // .post("/query", async (c) => {
  //   const parseBody = await c.req.parseBody();
  //   const query = parseBody["query"];
  //   console.log(query);

  //   return c.json("200");
  // })
  .get("/result", (c) => {
    // TODO: 存在しないページなので、リダイレクトか別の方法を
    const query = c.req.query("query");
    // console.log(query);
    // console.log(addIds(contactsListData));
    return c.html(
      <SearchResults targetData={addIds(contactsListData)} query={query} />
    );
  });

export { app as searchHonoApp };
