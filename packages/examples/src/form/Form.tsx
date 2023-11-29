import { formConfig } from "../../../routes/src/form/config";
import { itemData } from "../cart/data/itemData";

export const EditTable = () => {
  return (
    <table>
      <thead>
        <th>f</th>
        <th>l</th>
        <th>e</th>
        <th></th>
      </thead>
      <tbody
        hx-get={`${formConfig.routePrefix}/body`}
        hx-trigger="load, "
      ></tbody>
    </table>
  );
};

export const EditTargetTableBody = (props) => {
  return (
    <>
      {props.tableData.map((item) => {
        return (
          <tr>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>
              <button
                hx-get={`${formConfig.routePrefix}/edit/${item.id}`}
                hx-target="closest tr"
              >
                e
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export const EditTargetRow = (props) => {
  //   console.log(props.tableData);
  const item = props.tableData.find((target) => target.id === props.id);
  return item && props.edit === "true" ? (
    <>
      <td>
        <input name="firstname" value={item.firstname} />
      </td>
      <td>
        <input name="lastname" value={item.lastname} />
      </td>
      <td>
        <input name="email" value={item.email} />
      </td>
      <td>
        <button
          hx-post={`${formConfig.routePrefix}/save/${item.id}`}
          hx-target="closest tr"
        >
          save
        </button>
        <button
          hx-get={`${formConfig.routePrefix}/cancel/${item.id}`}
          hx-target="closest tr"
        >
          cancel
        </button>
        <button
          hx-get={`${formConfig.routePrefix}/delete/${item.id}`}
          hx-target="closest tr"
        >
          delete
        </button>
      </td>
    </>
  ) : item && props.edit === "false" ? (
    <>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.email}</td>
      <td>
        <button
          hx-get={`${formConfig.routePrefix}/edit/${item.id}`}
          hx-target="closest tr"
        >
          e
        </button>
      </td>
    </>
  ) : (
    <>
      <td colSpan="4">no item found</td>
    </>
  );
};
