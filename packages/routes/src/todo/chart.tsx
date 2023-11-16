export const PieChart = () => {
  const style = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      
      #pie-example-2 {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
      }
  
    `;
  return (
    <>
      <style>{style}</style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"
      ></link>
      <div id="pie-example-2">
        <table class="charts-css pie hide-data">
          <caption> Pie Example #2 </caption>{" "}
          <thead>
            <tr>
              <th scope="col"> Year </th> <th scope="col"> Progress </th>
            </tr>
          </thead>{" "}
          <tbody>
            <tr>
              <th scope="row"> 2016 </th>{" "}
              <td style="--start: 0.0; --end: 0.10;">
                <span class="data"> $ 10K </span>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row"> 2017 </th>{" "}
              <td style="--start: 0.10; --end: 0.15;">
                <span class="data"> $ 5K </span>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row"> 2018 </th>{" "}
              <td style="--start: 0.15; --end: 0.30;">
                <span class="data"> $ 15K </span>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row"> 2019 </th>{" "}
              <td style="--start: 0.30; --end: 0.85;">
                <span class="data"> $ 55K </span>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row"> 2020 </th>{" "}
              <td style="--start: 0.85; --end: 1.0;">
                <span class="data"> $ 15K </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
