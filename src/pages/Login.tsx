import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { loginUser } from './firebase';
import { toast } from './toast';

// Loggin in using firebase
const Login: React.FC = () => {
  const history = useHistory();
  // these are the react state
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
