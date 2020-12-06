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

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {' '}
            <h1>Personal Profile</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton routerLink='/skills'>Skills</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
