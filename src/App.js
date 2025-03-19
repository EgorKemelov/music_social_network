// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login'; // Предполагаем, что у вас будет компонент Login
import styles from './App.module.css';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} /> {/* Предполагаем, что у вас будет компонент Login */}
                        <Route path="/" element={<Home />} /> {/* Главная страница */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Добро пожаловать на нашу музыкальную социальную сеть!</h1>
        </div>
    );
};

export default App;