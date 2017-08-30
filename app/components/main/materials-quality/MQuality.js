import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {showModal, reportShow} from '../../../actions';

class MQuality extends Component {

    orderReportHandler() {
        this.props.showModal(true);
        this.props.reportShow(true);
    }

    render() {
        return(
            <section className="m-quality">
                <div className="container">
                    <div className="m-quality-block">
                        <figure className="m-quality-block__image">
                            <img src="images/m-quality.png" alt="Качество" title="Качество материалов"/>
                        </figure>
                        <div className="m-quality-block__desc">
                            <h2>ХОТИТЕ УБЕДИТЬСЯ В КАЧЕСТВЕ НАШИХ МАТЕРИАЛОВ?</h2>
                            <p>Оставьте заявку и мы вышлем Вам подборку из 12 примеров наших статей!</p>
                            <button className="button button--download" onClick={this.orderReportHandler.bind(this)}>СКАЧАТЬ ПРИМЕРЫ СТАТЕЙ <br/> <span>PDF 2.28 МБ</span></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        approachesState: store.approachReducer.approachItem
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, reportShow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MQuality);