import React, { useEffect, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, useIonRouter, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSpinner } from '@ionic/react';
import { useParams } from 'react-router';
import { useLocation, useHistory  } from 'react-router-dom';
import './Loading.css'

const Loading = () => {
  const location = useLocation();
  const router = useIonRouter();
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
       history.push({ pathname: '/home', state:{isActive: true} })
    }, 3000);
  },[]);


  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='flex-center'>
            <IonSpinner className='crescent-spinner' name="crescent" color="success"></IonSpinner>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Loading