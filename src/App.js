import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Landing } from './components/Home/Landing';
import { Features } from './components/Features/Features';
import { Extensions } from './components/Extensions/Extensions';
import { Questions } from './components/Questions/Questions';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <Landing />
      <Features />
      <Extensions />
      <Questions />
      <Contact />
    </>
  );
}

export default App;
