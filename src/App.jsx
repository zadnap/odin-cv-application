import './app.scss';
import Page from './components/Page';
import Button from './components/Button';
import { faDownload, faPen } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <Page />
      <div className="button-group">
        <Button icon={faPen} action="Edit CV" />
        <Button icon={faDownload} action="Download" />
      </div>
    </div>
  );
}

export default App;
