import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';
import Layout from './components/Layout';
import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('./pages/Home/Home'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
