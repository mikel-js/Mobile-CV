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
import './Home.css';
import { toast } from './toast';
import { registerUser } from './firebase';

// Registration is handled by firebase
const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function regUser() {
    if (password !== confirmPassword) {
      return toast('Passwords do not match');
    }

    if (username === '' || password === '') {
      return toast('Username/Password are required');
    }
    setLoading(true);
    const res = await registerUser(username, password);
    if (res) {
      toast('Registration successful!');
    }
    setLoading(false);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {' '}
            <h1>Register</h1>
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
        <IonInput
          placeholder='repeat password'
          type='password'
          onIonChange={(e: any) => setConfirmPassword(e.target.value)}
        />
        <IonButton onClick={regUser}>Register</IonButton>
        <p>Have an existing account? Login instead</p>
        <IonButton routerLink='/login' color='warning'>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
