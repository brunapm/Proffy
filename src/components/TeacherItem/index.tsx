import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/65819100?s=460&u=418b9bd94f4f9bcd2f3494bfd7b3a8ab8fd08662&v=4" alt="Bruna Monarin"/>
                <div>
                    <strong>Bruna Monarin</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta do ensino de programação em todos os níveis.
                <br /><br />
                Apaixonada por trazer mais mulheres ao universo da programação.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;