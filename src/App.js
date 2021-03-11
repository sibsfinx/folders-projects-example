//import logo from './logo.svg';
import './App.sass';
import AppNav from './components/AppNav';
import FoldersList from './components/FoldersList';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="App">
      <AppNav />
      <FoldersList />
      <AppContent />
    </div>
  );
}

export default App;
