import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Updated for React 18
import { Route, Routes, HashRouter } from 'react-router-dom'; // ✅ Added Routes
import HomePage from './Pages/HomePage';
import EventCreate from './Pages/Event_Create';
import EventList from './Pages/Event_List';
import EventPolibot from './Pages/Event_Polibot';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { createRoot } from 'react-dom/client';
import '../css/one-page-wonder.min.css';
import '../vendor/custom/global.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const BaseLayout = () => (
  <div>
    <Header />
    <div className="base">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Event/Create" element={<EventCreate />} />
        <Route path="/Event/List" element={<EventList />} />
        <Route path="/Event/Polibot" element={<EventPolibot />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

const root = createRoot(document.getElementById('app'));
root.render(
  <HashRouter>
    <BaseLayout />
  </HashRouter>
);
