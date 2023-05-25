
import './App.css';
import NavBar from './NavBar';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/articleList" element={<ArticleListPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
