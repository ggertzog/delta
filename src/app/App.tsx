import { AboutPage } from '@/pages/about';
import { HomePage } from '@/pages/home-page';
import { ProfilePage } from '@/pages/profile';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**
 * Renders the main application component.
 *
 * @return {ReactElement} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
