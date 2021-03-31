import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CardGroup from './components/CardGroup/CardGroup';
import DescriptionSection from './components/DecriptionSection/DescriptionSection';

function App() {
  return (
    <div className="App">
      <div>
        <DescriptionSection />
      </div>
      <div>
        <CardGroup />
      </div>
    </div>
  );
}

export default App;
