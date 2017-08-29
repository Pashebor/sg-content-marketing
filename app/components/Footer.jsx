import React, { Component } from 'react';
import ButtonToTop from './ButtonToTop';


const Footer = () => {
    return(

        <footer className="footer">
            {<ButtonToTop/>}
            <div className="container">
              <div className="footer-container">
                  <p className="footer__link">2017 <a href="https://sales-generator.ru">SALES-GENERATOR.RU</a></p>
                  <div className="footer__quest">
                      <p>Остались вопросы? Звоните сейчас</p>
                      <a href="tel: 88003331293">8 (800) 333 12 93</a>
                  </div>
              </div>
            </div>
        </footer>
    );
};

export default Footer;