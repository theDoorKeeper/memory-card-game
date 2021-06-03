
import GameContainer from "./components/GameContainer"
import Header from "./components/Header"
import Rules from "./components/Rules"
import "./style/App.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <Rules/>
      <GameContainer/>
    </div>
  );
}

export default App;
