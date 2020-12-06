import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import ionic from '../images/ionic.jpg';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function loginUser() {
    console.log(username, password);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {' '}
            <h1>Login</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInput
          placeholder='username'
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
          placeholder='password'
          type='password'
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={loginUser} color='warning'>
          Login
        </IonButton>
        <p>Don't have an account yet?</p>
        <IonButton routerLink='/register' color='tertiary'>
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
