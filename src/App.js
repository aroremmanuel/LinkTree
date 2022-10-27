import './App.css';
import Profile from './components/profile.js';
import Link from './components/link.js';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div id="page--container">
        <Profile />
        <Link />
        <Footer />
      </div>
    </div>
  );
}

export default App;
