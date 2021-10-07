
import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'

import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>

 <div className="App">
   <Route path="/" component={HomePage} exact/>
   <Route path="/about" component={AboutPage} exact/>
   <Route path="/article-list" component={ArticleList} exact/>
   <Route path="/article" component={ArticlePage} exact/>
     
    </div>

    </Router>
   
  );
}

export default App;
