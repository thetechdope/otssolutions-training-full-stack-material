import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english', color: 'blue' };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  // language: language === language

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english', 'blue')}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange('hindi', 'orange')}
          />
          <i
            className="flag ca"
            onClick={() => this.onLanguageChange('english ca', 'red')}
          />
          <i
            className="flag pk"
            onClick={() => this.onLanguageChange('hindi pk', 'green')}
          />
        </div>

        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>

      </div>
    );
  }
}

export default App;
