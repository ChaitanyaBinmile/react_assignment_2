 
import './App.css';
import { DashboardComponent } from './components/CommonComponents/DashboardComponent/DashboardComponent';
import { RouteProvider } from './router/PublicRouter/RouteProvider';


function App() {

  return (
    <div className='flex '>
      <DashboardComponent/> 
      <RouteProvider/>
    </div>
  );
}

export default App;
