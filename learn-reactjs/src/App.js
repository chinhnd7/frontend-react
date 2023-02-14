import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import Header from './components/Header';
import NotFound from './components/NotFound';
import NewAlbum from './features/Album/components/NewAlbum';

function App() {
  return (
    <div>
      <Header />
      <p><Link to="todos">Todos</Link></p>
      <p><Link to="albums">Albums</Link></p>
      <Routes>
        <Route path='/' element={<TodoFeature />} />
        <Route path='todos' element={<TodoFeature />} />
        <Route path='albums' element={<AlbumFeature />}>
          <Route path=':albumId' element={<AlbumFeature />} />
          <Route path='new' element={<NewAlbum />} />
        </Route>
        {/* No others routes match */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      Footer
    </div >
  );
}

export default App;