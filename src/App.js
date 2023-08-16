import { Provider } from 'react-redux';
import './App.css';
import store from './components/redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>  
    <div className="App">     
     <HookCakeContainer />
     <IceCreamContainer />
     <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
