import { Hono } from "hono";
import {
  EditTable,
  EditTargetRow,
  EditTargetTableBody,
} from "../../../components/src/form/Form";
import { contactsListData } from "../../../components/src/form/data/formTargetData";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(<EditTable />);
  })
  .get("/body", (c) => {
    return c.html(<EditTargetTableBody tableData={contactsListData} />);
  })
  .get("/body/:userId", (c) => {
    const userId = c.req.param("userId");
    return c.html(
      <EditTargetRow tableData={contactsListData} id={userId} edit="false" />
    );
  })
  .get("/edit/:userId", async (c) => {
    const userId = await c.req.param("userId");
    return c.html(
      <EditTargetRow tableData={contactsListData} id={userId} edit="true" />
    );
  })
  .post("/save/:userId", async (c) => {
    // TODO: 操作途中ならロールバックする
    const userId = await c.req.param("userId");

    const parseBody = await c.req.parseBody();
    const firstname: string = parseBody["firstname"] as string;
    const lastname: string = parseBody["lastname"] as string;
    const email: string = parseBody["email"] as string;

    // email as key, update contactsListData's item
    const index = contactsListData.findIndex((target) => target.id === userId);
    if (index !== -1) {
      // アイテムが見つかった場合、データを更新
      contactsListData[index] = {
        ...contactsListData[index],
        firstname,
        lastname,
        email,
      };
      // 応答を返す（例えば更新されたアイテムの情報など）
    } else {
      // アイテムが見つからなかった場合、エラーを返す
      throw new Error(
        "エラー: 指定されたメールアドレスのアイテムが見つかりません"
      );
    }
    return c.html(
      <EditTargetRow tableData={contactsListData} id={userId} edit="false" />
    );
  })
  .get("/cancel/:userId", async (c) => {
    const userId = await c.req.param("userId");
    return c.html(
      <EditTargetRow tableData={contactsListData} id={userId} edit="false" />
    );
  })
  .delete("/delete/:userId", async (c) => {
    const userId = c.req.param("userId");
    const index = contactsListData.findIndex((target) => target.id === userId);
    // if (index !== -1) {
    //   // アイテムが見つかった場合、データを更新
    //   contactsListData[index] = {};
    // } else {
    //   // アイテムが見つからなかった場合、エラーを返す
    //   throw new Error(
    //     "エラー: 指定されたメールアドレスのアイテムが見つかりません"
    //   );
    // }
  });

export { app as formHonoApp };
