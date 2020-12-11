import { IonButton } from '@ionic/react';
import React from 'react';
import { logoutUser } from './firebase';
import { useHistory } from 'react-router-dom';
import { toast } from './toast';

// Just a simple logout function
const LogoutButton: React.FC = () => {
  const history = useHistory();
  async function logout() {
    const res = await logoutUser();
    if (res) {
      toast('Logout successful!');
      history.push('/');
    }
  }
  return (
    <>
      <IonButton className='header__button' onClick={logout}>
        Logout
      </IonButton>
    </>
  );
};

export default LogoutButton;
