import React, { Component } from 'react';
import {showModal} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class Recomendations extends Component{
    constructor(props) {
        super(props);
        this.callPopupHandler = this.callPopupHandler.bind(this);
    }

    callPopupHandler() {
        this.props.showModal(true);
    }
    render() {
        return(
            <ScrollableAnchor id={'recomendations'}>
                <section className="recomendations">
                    <div className="container">
                        <h2 className="title">ПРЕИМУЩЕСТВА КОНТЕНТ-МАРКЕТИНГА</h2>
                        <div className="recomendations-info">
                            <div className="recomendations-info__item">
                                <img src="images/stack-of-coins.svg" alt="ВОЗВРАТ ИНВЕСТИЦИЙ" title="ВОЗВРАТ ИНВЕСТИЦИЙ" data-audit="ВОЗВРАТ ИНВЕСТИЦИЙ" onClick={this.callPopupHandler}/>
                                <h4>НИЗКАЯ СТОИМОСТЬ</h4>
                                <p>Стоимость привлечения лида с помощью контент-маркетинга меньше, чем у классических способов рекламы</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/changing-money.svg" alt="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" title="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" data-audit="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" onClick={this.callPopupHandler}/>
                                <h4>ВЫСОКАЯ ОКУПАЕМОСТЬ</h4>
                                <p>Как показывает статистика, средний показатель возврата инвестиций у наших клиентов — 320%</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/shield.svg" alt="КОМАНДА СПЕЦИАЛИСТОВ" title="КОМАНДА СПЕЦИАЛИСТОВ"  data-audit="КОМАНДА СПЕЦИАЛИСТОВ" onClick={this.callPopupHandler}/>
                                <h4>ГАРАНТИЯ РЕЗУЛЬТАТА</h4>
                                <p>Мы даем юридическую гарантию на весь объем выполняемых работ. Результаты зафиксированы в договоре</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/clock.svg" alt="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ" title="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ"  data-audit="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ" onClick={this.callPopupHandler}/>
                                <h4>ДОЛГОСРОЧНЫЙ ЭФФЕКТ</h4>
                                <p>Размещенный контент останется на вашем сайте навсегда, а значит, каждый день он будет привлекать новых клиентов</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/statistic.svg" alt="ИНДИВИДУАЛЬНЫЙ ПОДХОД" title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"  data-audit="ИНДИВИДУАЛЬНЫЙ ПОДХОД" onClick={this.callPopupHandler}/>
                                <h4>МАСШТАБИРОВАНИЕ БИЗНЕСА</h4>
                                <p>Главная цель контент-маркетинга масштабирование Вашего бизнеса, а не трафик или лиды</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/like.svg" alt="РАБОТА НАД САЙТОМ ПОД КЛЮЧ" title="РАБОТА НАД САЙТОМ ПОД КЛЮЧ"  data-audit="РАБОТА НАД САЙТОМ ПОД КЛЮЧ" onClick={this.callPopupHandler}/>
                                <h4>ПОЗИТИВНАЯ РЕАКЦИЯ КЛИЕНТОВ</h4>
                                <p>Не является прямой рекламой и благосклонно воспринимается пользователями интернета</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Recomendations);