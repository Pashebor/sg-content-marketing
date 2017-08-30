import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showKnowDefaultForm, showModal} from '../actions/index';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar.jsx';

class HeaderContent extends Component{
    constructor(props) {
        super(props);
        this.openKnowFormHandler = this.openKnowFormHandler.bind(this);
    }

    openKnowFormHandler() {
        this.props.showKnowDefaultForm(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('SKOLKO_KLIENTOV');
    }

    render() {
        return(
            <section className="header-content-background">
                <div className="content--background">
                    <NavBar/>
                    <div className="container header__content">
                        <h1 className="header__content-title">КОНТЕНТ-МАРКЕТИНГ ПОЗВОЛИТ ПОЛУЧАТЬ КЛИЕНТОВ <span>24 ЧАСА В СУТКИ</span> </h1>
                        <h3 className="header__content-subtitle">Увеличивает продажи. Помогает завоевать доверие.<br/> Ненавязчиво продвигает товары и услуги.</h3>
                        <button className="button" onClick={this.openKnowFormHandler}>заказать контент-маркетинг для своего сайта</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showKnowDefaultForm, showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
