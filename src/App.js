import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Head />
      <Body />
    </Provider>
  );
}

export default App;
