import "./App.css";
import Header from './components/Header';
import Content from './components/Content'
import { LanguageProvider } from './components/LanguageContext';

const App = () => {
  return (
    <div className="app">
      <LanguageProvider>
        <Header />
        <Content />
      </LanguageProvider>
    </div>
  );
};

export default App;