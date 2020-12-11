import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

import './Home.css';
import pix from '../images/pix.jpg';

import Logout from './LogoutButton';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonAvatar>
              <img src={pix} alt='profile picture' />
            </IonAvatar>
            <h1>Personal Profile</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonContent>
          <h2></h2>
          <p>Name: Michael Castro</p>
          <p>Occupation: Front end developer, student</p>
          <p>Company/Institution: Vertics Oy, Laurea UAS</p>
          <h3>About me</h3>
          <p>
            I am a 2nd year Business IT student at Laurea UAS. I am also a front
            end developer at Vertics Oy, a finnish start up company. Aside from
            being a front end developer, I am also a registered nurse in
            Finland.
          </p>
        </IonContent>
      </IonContent>
      <Logout />
    </IonPage>
  );
};

export default Home;
