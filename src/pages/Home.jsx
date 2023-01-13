import React, { useEffect, useState, useRef } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, useIonRouter, IonText, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSpinner } from '@ionic/react';
import { useParams } from 'react-router';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {

  const [banners, setBanners] = useState([]);

  //const { name } = useParams<{ name: string; }>();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    
    try {
      axios.get(process.env.REACT_APP_API_URL+"home-page")
        .then(async (res) => {
           if(res.status === 200){
             // console.log(res.data.data.banners.image_1);
              
              setBanners(res.data.data.banners);
              
              //setBanners(res.data.data.banners);
              
              
              
          }else{
            return console.log("Error !");
          }
          
        }).catch(error => 
          console.log("Error !")
        );
      } catch (error) {
          //console.error('error');
      }
  
    
  }, [])
  
  //console.log(banners.id);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src={process.env.REACT_APP_UPLOAD_URL+'page/banner/'+banners.image_4} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.REACT_APP_UPLOAD_URL+'page/banner/'+banners.image_3} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.REACT_APP_UPLOAD_URL+'page/banner/'+banners.image_2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.REACT_APP_UPLOAD_URL+'page/banner/'+banners.image_1} alt='' />
          </SwiperSlide>
        </Swiper>
        </div>
        <div>
        <IonText color="secondary" className='ion-text-center'>
          <h1><strong>Top Rated Music</strong></h1>
        </IonText>
      
        </div>
      </IonContent>
      <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
    </IonPage>
  )
}

export default Home