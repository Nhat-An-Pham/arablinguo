import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Footer from "../component/footer/Footer";
import LoadingPage from '../pages/LoadingPage';

const Navbar = lazy(() => import("../component/navbar/Navbar"));
const HomePage = lazy(() => import("../pages/HomePage"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const TestPage = lazy(() => import("../pages/TestPage"))
const ReadingPage = lazy(() => import("../pages/ReadingPage"))
const SettingPage = lazy(() => import("../pages/SettingPage"))
const TranslatePage = lazy(() => import("../pages/TranslatePage"))
const ForumPage = lazy(() => import("../pages/ForumPage"))
const TestDetailPage = lazy(() => import("../pages/TestDetailPage"))



function Layout() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="*" exact element={<HomePage />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
            {/* <Route path="/loading" exact element={<LoadingPage />} /> */}
            <Route path="/translator" exact element={<TranslatePage />} />
            <Route path="/forum" exact element={<ForumPage />} />
            <Route path="/test" exact element={<TestPage />} />
            <Route path="/test/:categoryName/:testId" exact element={<TestDetailPage />} />
            <Route path="/reading" exact element={<ReadingPage />} />
            <Route path="/setting" exact element={<SettingPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default Layout;
