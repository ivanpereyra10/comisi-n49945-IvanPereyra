
import React from 'react';
import 'StylesNb'; 

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="logo-container">
                    <img src="ruta_del_logo" alt="Logo" className="logo" />
                    <h1 className="titulo">LeBron</h1>
                </div>
                <section className="section">
                    <button className="button">Home</button>
                    <button className="button">Shop</button>
                    <button className="button">Contacts</button>
                </section>
            </nav>
        </>
    );
}

export default NavBar;
