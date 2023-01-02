import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// material ui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Pages
import MainPage from './pages/MainPage';
import PostListPage  from './pages/PostListPage';

// Common Layout
import Header from './components/common/Header';
import Footer from './components/common/Footer';


const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Header */}
      <Header />

      {/* Body */}
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/posts" element={<PostListPage />}/>
      </Routes>

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}