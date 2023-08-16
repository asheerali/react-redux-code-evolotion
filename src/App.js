import { Provider } from 'react-redux';
import './App.css';
import store from './components/redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store={store}>  
    <div className="App">     
     <HookCakeContainer />
     <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
