import React from 'react'

import './Footer.css'
import logo from '../img/logo.png'

export const Footer = () => {

    return (
        <div id='footer'>
            <footer id='footer-container'>
                <section id='contatos'>
                    <h2>Contatos</h2>
                    <div>
                        <h3>CEO</h3>
                        <p>sabrina@captarbank.com.br</p>
                    </div>
                    <div>
                        <h3>JURÍDICO</h3>
                        <p>jurídico@captarbank.com.br</p>
                    </div>
                    <div>
                        <h3>Demais</h3>
                        <p>captarsocial@captarbank.com.br</p>
                        <p>ouvidoria@captarbank.com.br</p>
                    </div>
                    <div>
                        <h3>Whatsapp Captar</h3>
                        <p>11 998943402</p>
                    </div>
                </section>
                <section id='horario'>
                    <p>Horário de atendimento 
                    09hrs as 16hrs
                    De segunda a sexta feira</p>
                </section>
                <section id='footer-img'>
                    <img src={logo} alt="logo" />
                </section>
            </footer>
        </div>
    )
}
