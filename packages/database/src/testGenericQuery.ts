import connect from "@databases/sqlite";

interface Employee {
  id: number;
  name: string;
  // 他の必要なフィールドをここに追加
}

async function sql<T>(query: string): Promise<T[]> {
  const db = connect();
  db.query(query);
  return []; // データベースから取得した結果を返す
}

async function getAllEmployees(): Promise<Employee[]> {
  const query = `SELECT EmployeeID as id, EmployeeName as name FROM Employees`;
  return sql<Employee>(query);
}

// 関数の使用
async function main() {
  try {
    const employees = await getAllEmployees();
    console.log(employees); // 従業員のリストを出力
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

main();
