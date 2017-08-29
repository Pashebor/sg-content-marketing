import React, {Component} from 'react';

class MQuality extends Component {
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
                            <button className="button button--download">СКАЧАТЬ ПРИМЕРЫ СТАТЕЙ <br/> <span>PDF 2.28 МБ</span></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MQuality;