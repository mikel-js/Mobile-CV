import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import ionic from '../images/ionic.jpg';
import { loginUser } from './firebase';
import { Toast } from '@capacitor/core';
import { toast } from './toast';

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    const res = await loginUser(username, password);
    if (!res) {
      toast('Login failed, check your credentials');
    } else {
      toast('Login successful!');
      history.push('/index');
    }
    setLoading(false);
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
      <IonLoading message='Loading...' isOpen={loading} />
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
        <IonButton onClick={login} color='warning'>
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
