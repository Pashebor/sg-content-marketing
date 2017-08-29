import React from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setApproachItem} from '../../../actions'

class Approach extends React.Component{
    constructor(props) {
        super(props);
        this.nextHandler = this.nextHandler.bind(this);
        this.previousHandler = this.previousHandler.bind(this);
        this.hoverPaginHandler = this.hoverPaginHandler.bind(this);

    }
    

    nextHandler() {
        this.refs.slider.slickGoTo(this.props.approachesState + 1);
        this.props.setApproachItem(this.props.approachesState + 1);
        this.props.approachesState === 6 ? this.props.setApproachItem(0) : null;
    }

    previousHandler() {
        this.refs.slider.slickGoTo(this.props.approachesState - 1);
        this.props.setApproachItem(this.props.approachesState - 1);
        this.props.approachesState === 0 ? this.props.setApproachItem(6) : null;
    }

    hoverPaginHandler(event) {
        this.props.setApproachItem(parseInt(event.target.getAttribute('value')));
        this.refs.slider.slickGoTo(parseInt(event.target.getAttribute('value')));
    }

    approachItems() {
        const items = [0, 1, 2, 3, 4, 5, 6],
            text = ['Анализ специфики бизнеса', 'Анализ Ваших конкурентов', 'Составление семантического ядра', 'Разработка  контент-стратегии', 'Написание экспертных статей', 'SEO-оптимизация текстов', 'Верстка статей на сайте'],
            images = ['stats', 'concurent-analize', 'molecule', 'list', 'taking-notes', 'text-optimaze', 'folded-newspaper'];
        return items.map((item, i) => {
            return (<div key={item} className={`approach-types__item ${this.props.approachesState === item ? ' approach-types__item--active': ''}`}  ref={`paginator${item}`} >
                <figcaption value={item} onMouseEnter={this.hoverPaginHandler}>
                    <img value={item} onMouseEnter={this.hoverPaginHandler} src={`images/${images[i]}${this.props.approachesState === item ? '-green' : "-blue"}.svg`} alt="" title="" />
                </figcaption>
                <p value={item} onMouseEnter={this.hoverPaginHandler}>{text[i]}</p>
            </div>);
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed: 5000,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: false,
            draggable: false,
            swipeToSlide: false,
            pauseOnHover: false,
            arrows: false,
            fade: true,
            touchMove: false,
            swipe: false,
            swipeToSlide: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    draggable: false,
                    swipeToSlide: false,
                    infinite: true,
                    touchMove: false,
                    swipe: false
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    draggable: false,
                    swipeToSlide: false,
                    arrows: false,
                    touchMove: false,
                    swipe: false
                }
            }]
        };


        return(
            <section className="approach">
                <div className="container">
                    <h2 className="title">КАК БУДЕТ СТРОИТЬСЯ РАБОТА НАД САЙТОМ</h2>
                    <div className="approach-types">
                      <div className="approach-types-wrapper">
                          {this.approachItems()}
                      </div>
                    </div>
                    <div className="approach-slider">
                        <div className="approach-slider__nav" onClick={this.previousHandler}><div className="arrow-block"><img src="images/arrow-prev.svg"/></div></div>
                        <div className="approach-slider__block">
                    <Slider ref='slider' {...settings}>
                        <div className="approach-slider__item">
                            <p>Мы проводим комплексное маркетинговое исследование Вашего бизнеса (более 40 параметров, которые разработаны под Вашу отрасль бизнеса).</p>
                        </div>
                        <div className="approach-slider__item">
                            <p>Определяем Ваших главных конкурентов (не менее 3). Проводим глубокий сравнительный анализ для выявления Ваших конкурентных преимуществ.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p>Подбираем слова, отражающие тематику сайта. Проверяем конкурентность  ключевых фраз. Рассчитываем их эффективность. Составляем финальное семантическое ядро.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p>Составляем контент-план для дальнейшего продвижения Вашего сайта, постоянно контролируя его эффективность. Вносим соответствующие коррективы.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p>Мы создаем «правильный» контент, который соответствует последним требованиям SEO, но в первую очередь интересен и полезен Вашей целевой аудитории.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p>Оптимизируем экспертные статьи для поисковых систем. Наполняем их ключевыми словами, важными для продвижения Вашей страницы.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p>Качественно оформляем контент на сайте. Настраиваем внутреннюю перелинковку статей. Настраиваем правильное отображение статей во всех популярных браузерах.</p>
                        </div>
                    </Slider>
                        </div>
                        <div className="approach-slider__nav" onClick={this.nextHandler}><div className="arrow-block"><img src="images/arrow-next.svg" /></div></div>
                    </div>
                    <button className="button button--download">СКАЧАТЬ ПРИМЕР ПЛАНА РАБОТ НА 2 МЕСЯЦА <br/> <span>PDF 2.21 МБ</span></button>
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
    return bindActionCreators({setApproachItem}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Approach);