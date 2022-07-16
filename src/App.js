import './App.css';
import { Routes , Route } from 'react-router-dom';
import Header from './component/Header/Header';
import CriptoList from './page/CriptoList/CriptoList';
import CriptoPortfel from './page/CriptoPortfel/CriptoPortfel';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CriptoList />} />
        <Route path="/portfel" element={<CriptoPortfel />} />
      </Routes>
    </main>
  );
}

export default App;
