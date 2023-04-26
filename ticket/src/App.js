import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <h1>All Tickets</h1>
      <table>
        <thead>
            <tr>
              <th>Unique Symbol</th>
              <th>Yes/No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>User Name</th> 
              
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>2909bc39</td>
            <td>Y</td>
            <td>Need to design feedback form</td>
            <td>Print Design</td>
            <td>9/13/2022 11:58AM</td>
            <td>Matina</td>
          </tr>
          <tr>
            <td>c6027ccf</td>
            <td>Y</td>
            <td>Marsi Cheli Jwai Set-T3 Thakali</td>
            <td>New Design require</td>
            <td>9/13/2022 1:58PM</td>
            <td>Matina</td>
          </tr>
          <tr>
            <td>af828409</td>
            <td>Y</td>
            <td>Need greeting for Baal Diwas</td>
            <td>New Design require</td>
            <td>9/13/2022 2:03PM</td>
            <td>Bijan</td>
          </tr>
          <tr>
            <td>39f7f9f4</td>
            <td>Y</td>
            <td>Promotion 1"Outlet:EI Beso</td>
            <td>New Design require</td>
            <td>9/13/2022 2:55PM</td>
            <td>Bijan</td>
          </tr>
          
          
         


        </tbody>
      </table>
      <details/>
    </div>
  );
}

export default App;
