import MiniSearch from "minisearch";
import { config } from "./config";
import {
  _contactsListData,
  addIds,
  contactsListData,
} from "./data/searchTargetData";

export const SearchInput = () => {
  return (
    <>
      {/* <form hx-get={`${config.routeConfigPrefix}/result/${query}`} hx-swap="none">
      <input value="test" name="query" />
      <button type="submit">query</button>
    </form> */}
      <form
        // hx-get={`${config.routeConfigPrefix}/result`}
        hx-boost="true"
        hx-target="#search-results"
        // hx-select="#search-results"
        hx-push-url="true"
        action={`${config.routeConfigPrefix}/result`}
      >
        <input
          type="text"
          name="query"
          value="{{ request.GET.search }}"
          placeholder="Search"
        />
      </form>
    </>
  );
};

// TODO: propsの型定義
export const SearchResults = (props) => {
  let miniSearch = new MiniSearch({
    fields: ["firstname", "lastname", "email"], // fields to index for full-text search
    storeFields: ["firstname", "lastname", "email"], // fields to return with search results
  });

  // console.log("props.targetData: ", props.targetData);
  miniSearch.addAll(props.targetData);

  // console.log("props.query: ", props.query);
  let searched = miniSearch.search(
    props.query !== undefined ? props.query : ""
  );
  // console.log("searched: ", searched, "searched");
  return (
    <table
      id="search-results"
      hx-get={`${config.routeConfigPrefix}/result`}
      hx-trigger="load, "
    >
      <thead>
        <th>f</th>
        <th>l</th>
        <th>e</th>
      </thead>
      <tbody>
        {searched.map((searched) => {
          return (
            <tr>
              <td>{searched.firstname}</td>
              <td>{searched.lastname}</td>
              <td>{searched.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
