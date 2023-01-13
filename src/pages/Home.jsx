import React, { useEffect, useState, useRef } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, useIonRouter, IonImg, IonText, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSpinner } from '@ionic/react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
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
  const [cat1, setCat1]       = useState([]);
  const [cat2, setCat2]       = useState([]);
  const [cat3, setCat3]       = useState([]);
  const [cat4, setCat4]       = useState([]);
  const [cat5, setCat5]       = useState([]);
  const [cat6, setCat6]       = useState([]);

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
              setCat1(res.data.data.category_id_1);
              setCat2(res.data.data.category_id_2);
              setCat3(res.data.data.category_id_3);
              setCat4(res.data.data.category_id_4);
              setCat5(res.data.data.category_id_5);
              setCat6(res.data.data.category_id_6);
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
        
      
        </div>
        <section className="topRatedMusic">
        <IonText color="secondary" className='ion-text-center'>
          <h1><strong>Top Rated Music</strong></h1>
        </IonText>
        <ion-card className="round-10">
          <ion-card-content>
          <Link to="page/blog" className="h-200"><IonImg src="http://localhost/zeryab/public/uploads/page/category/1655194343_1.webp" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
          <IonText color="secondary" className='catName'>
            <h2>Dance Music</h2>
          </IonText>
          </Link>
          </ion-card-content>
        </ion-card>

        <ion-card className="round-10">
        <ion-card-content>
        <Link to="page/blog" className="h-200"><IonImg src="http://localhost/zeryab/public/uploads/page/category/1655197993_4.webp" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
          <IonText color="secondary" className='catName'>
            <h2>Dance Music</h2>
          </IonText>
        </Link>
        </ion-card-content>
      </ion-card>
        </section>
        
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