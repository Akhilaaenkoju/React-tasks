import "./table.css";
function Table(){
    return(
      <div className="Table">
      <table>
        <tr>
            <th>name</th>
            <th>roll.no</th>
            <th>course</th>


        </tr>
        <tr>
        <td>divya</td>
        <td>01</td>
        <td>python fullstack developer</td>
        </tr>

        <tr>
        <td>akhila</td>
        <td>02</td>
        <td>python fullstack developer</td>
        
        </tr>
      <tr>
        <td>shivani</td>
        <td>03</td>
        <td>fullstackdeveloper</td>
      </tr>

      </table>

      </div>

    )
}
export default Table