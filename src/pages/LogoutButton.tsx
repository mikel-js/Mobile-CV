import { IonButton, IonFooter, IonToolbar } from '@ionic/react';
import React from 'react';
import { logoutUser } from './firebase';
import { useHistory } from 'react-router-dom';
import { toast } from './toast';

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
      <IonFooter>
        <IonToolbar>
          <IonButton className='header__button' onClick={logout}>
            Logout
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default LogoutButton;
