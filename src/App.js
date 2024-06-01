import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import PieChartsData from './components/PieChartsData';
import CandelChartData from './components/CandelChartData';

function App() {
  return (
    <>
      <CandelChartData />
      <PieChartsData />
      <LineChart />
    </>
  );
}

export default App;
