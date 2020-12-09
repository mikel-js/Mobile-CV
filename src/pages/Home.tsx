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
import pix from '../images/pix.jpg';
import { logoutUser } from './firebase';
import { useHistory } from 'react-router-dom';
import { toast } from './toast';
import Header from './Header';
import Logout from './LogoutButton';

const Home: React.FC = () => {
  const history = useHistory();
  async function logout() {
    const res = await logoutUser();
    if (res) {
      toast('Logout successful!');
      history.push('/');
    }
  }
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
        <Header />
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
