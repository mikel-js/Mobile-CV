// Michael Castro
// 1902459
// My main page, you can log or register here
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Home.css';

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
