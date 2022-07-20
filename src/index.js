import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import Search from './pages/Search';
import Profil from './pages/Profil';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import RouteGuard from './components/RouteGuard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    white: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#1E1E1E',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/login' element={
            <RouteGuard loginOnly={false}>
              <Login />
            </RouteGuard>
          } />
          <Route path='/register' element={
            <RouteGuard loginOnly={false}>
              <Register />
            </RouteGuard>
          } />
          <Route path='/profil' element={
            <RouteGuard loginOnly>
              <Profil />
            </RouteGuard>
          } />
          <Route path='/search/:title' element={<Search />} />
          <Route path='/movie/:id' element={
            <RouteGuard loginOnly>
              <Movie />
            </RouteGuard>
          } />
          <Route path='*' element={<NotFound />} />
          {/* <Route path="/" element={<App />}>
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
        </Route> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
