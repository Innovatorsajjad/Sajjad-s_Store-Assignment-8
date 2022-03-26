
import { Accordion } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Question from './components/QuestionAndAnswer/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
