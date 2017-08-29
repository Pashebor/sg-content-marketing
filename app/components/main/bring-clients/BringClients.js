import React from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';
import ScrollableAnchor from 'react-scrollable-anchor';

class BringClients extends React.Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'know-bottom'};
        formData.name = this.refs.name.value;
        screen.width < 1024 ? formData.phone = this.refs.phone.mask.getValue() : formData.phone = this.refs.phone.value;

        this.props.sendClientsCallback(formData);
        yaCounter44418460.reachGoal('POLUCHIT_PREDLOJENIE');
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="know-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="know-form__notification know-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        return(
            <section className="b-clients">
                    <div className="container">
                        <h2 className="title">СКОЛЬКО КЛИЕНТОВ ВЫ СМОЖЕТЕ ПОЛУЧАТЬ</h2>
                        {this.clientsNotification()}
                        <div className="b-clients__block">
                            <div className="b-clients__text">
                                <p>Узнайте, насколько <span>будет эффективен</span> контент-маркетинг для Вашего бизнеса!</p>
                            </div>
                            <form className="form-group know-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                                <input className="form-control" placeholder="Имя *" type="text" ref="name" required/>
                                {screen.width < 1024 ?
                                    <input placeholder="+7(___) ___ __ __"  type="text" ref="phone" name="phone" required="true" className="form-control"/> :
                                    <MaskedInput mask="+7(111) 111 11 11" type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/>
                                }
                                <ScrollableAnchor id={'how-many-clients'}>
                                    <input type="submit" className="button button--download"  value="УЗНАТЬ, СКОЛЬКО КЛИЕНТОВ Я ПОЛУЧУ"/>
                                </ScrollableAnchor>
                                <p className="b-clients__disclaimer">Это бесплатно и ни к чему Вас не обязывает *</p>
                            </form>
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
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BringClients);