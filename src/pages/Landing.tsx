import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import ionic from '../images/ionic.jpg';

const Landing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {' '}
            <h1>Welcome!</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>
          {' '}
          I am Michael Castro, a BIT student @ Laurea UAS. I am glad to welcome
          you! Please login to view my online CV, register if you don't have an
          account yet. Enjoy!
        </p>
        <IonButton routerLink='/login' color='warning'>
          Login
        </IonButton>
        <IonButton routerLink='/register' color='tertiary'>
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
