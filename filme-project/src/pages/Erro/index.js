import React from 'react';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <div className="error-container">
            <p className="error-message">Ops! Algo deu errado.</p>
            <p className="error-details">Por favor, tente novamente mais tarde.</p>
            <button className="back-button" onClick={() => window.history.back()}>Voltar</button>
        </div>
    );
}

export default ErrorPage;
