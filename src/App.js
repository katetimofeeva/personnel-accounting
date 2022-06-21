import Header from "./components/header/Header";
import SearchPanel from "./components/searchPanel/SearchPanel";
import Filetrs from "./components/filters/Filters";

import './app.css'


function App() {
  return (
    <div className="app">
      <Header/>
      <div className='main'>
        <SearchPanel/>
        <Filetrs/>
      </div>
    </div>
  );
}

export default App;
