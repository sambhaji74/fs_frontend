import React from "react";

function Home() {
  return (
    <div className=" container">
      <div className="py-4">
        <table className="table  border  shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="1">Larry the Bird</td>
              <td>@twitter</td>
              <td>Thornton</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
