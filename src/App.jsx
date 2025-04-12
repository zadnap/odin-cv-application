import './app.scss';
import Page from './components/Page';
import Button from './components/Button';
import { faCheck, faDownload, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="app">
      <Page isEditing={isEditing} />
      <div className="button-group">
        <Button
          icon={isEditing ? faCheck : faPen}
          action={isEditing ? 'Save your edit' : 'Edit CV'}
          onClick={isEditing ? handleSave : handleEdit}
        />
        <Button icon={faDownload} action="Download" />
      </div>
    </div>
  );
}

export default App;
