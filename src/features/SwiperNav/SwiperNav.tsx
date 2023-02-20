import {FC} from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import './swiperNav.scss'
import {dateInfo} from "../../array";

type UseSwiperType = {
    page: string;
}

export const SwiperNav: FC<UseSwiperType> = ({page}) => {
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
                {page in dateInfo &&
                    dateInfo[page].map(el => (
                        <SwiperSlide key={el.id} className='sliderItem'>
                            <h2 className='sliderItemYear'>{el.year}</h2>
                            <p className='sliderItemText'>{el.text}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div slot='container-end' onClick={() => swiper.slidePrev()} />
        </div>
    );
};
