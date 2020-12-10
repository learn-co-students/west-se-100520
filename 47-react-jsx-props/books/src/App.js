import './App.css';
import BookContainer from './Components/BookContainer'


function App() {
  return (
    <div className="App-header">
      <h1>Hi lol</h1>
      <p>Miyuki is good cat</p>
      <BookContainer arr={['Mel', 'Pat']} num={3} bool={true}/>
     
    </div>
  );
}
// function App() {
//   return (
//     <div className="App-header">
//      <h1>Hi lol</h1>
//      <p>Miyuki is good cat</p>
//      <BookContainer />
//      <BookContainer />
//      <BookContainer />
//      <BookContainer />
//     </div>
//   );
// }

export default App;
