import {FC} from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import './swiperNav.scss'
import {dateInfo} from "../../state";

type UseSwiperType = {
    page: number;
}

export const SwiperNav: FC<UseSwiperType> = ({page}) => {
    console.log(dateInfo[0])
    const swiper = useSwiper()
    return (
        <div className='slider'>
                <div slot='container-start' onClick={() => swiper.slideNext()} className='buttonSliderNext'/>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                className='swiper sliderItemBlock'
                navigation
            >
                {
                    dateInfo[page].map(el => (
                        <SwiperSlide key={el.id} className='sliderItem'>
                            <h2 className='sliderItemYear'>{el.year}</h2>
                            <p className='sliderItemText'>{el.text}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div slot='container-end' onClick={() => swiper.slidePrev()} className={'buttonSliderNext'} />
        </div>
    );
};
