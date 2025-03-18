import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MainLayout } from "./layouts/MainLayout";

const AppRoutes = () => (
    <MainLayout>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </MainLayout>
);

export default AppRoutes;
