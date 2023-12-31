import { Provider } from 'react-redux';
import './App.css';
import store from './components/redux/store';
// import HookCakeContainer from './components/HookCakeContainer';
// import IceCreamContainer from './components/iceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/itemContainer';
import UsersContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>  
    <div className="App">     
    {/* <ItemContainer cake />
    <ItemContainer />
     <HookCakeContainer />
     <IceCreamContainer />
     <NewCakeContainer /> */}
     <UsersContainer />
    </div>
    </Provider>
  );
}

export default App;
