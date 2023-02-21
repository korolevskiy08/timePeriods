import './App.scss'
import lineGradient from "./assets/lineGradient.png";
import sliderArrowLeft from "./assets/sliderArrowLeft.png";
import sliderArrowRight from "./assets/sliderArrowRight.png";
import {useState} from "react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import {SwiperNav} from "./features/SwiperNav/SwiperNav";


function App() {
    const [page, setPage] = useState<number>(1)

    return (
        <div className='container'>
            <div className='line'/>
            <div className='line line-center'/>
            <div className='line line-right'/>

            <div className='title-block'>
                <img src={lineGradient} alt="gradient"/>
                <h1 className='title'>Исторические даты</h1>
            </div>

            <div className='circle'>
                <button className='filterButton' onClick={() => setPage(0)}>1</button>
                <button className='filterButton' onClick={() => setPage(1)}>2</button>
                <button className='filterButton' onClick={() => setPage(2)}>3</button>
                <button className='filterButton' onClick={() => setPage(3)}>4</button>
                <button className='filterButton' onClick={() => setPage(4)}>5</button>
            </div>
            <div className='date'>
                <p className='start-date'>2015</p>
                <p className='end-date'>2022</p>
            </div>
            <div className='slider-container'>
                <span className='count'>06/06</span>
                <div className='buttons'>
                    <button className='button'>
                        <img className='sliderArrow' src={sliderArrowLeft} alt="arrow"/>
                    </button>
                    <button className='button'>
                        <img className='sliderArrow' src={sliderArrowRight} alt="arrow"/>
                    </button>
                </div>
                <SwiperNav
                    page={page}
                />
            </div>
        </div>
    )
}

export default App
