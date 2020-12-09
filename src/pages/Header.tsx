import { IonButton } from '@ionic/react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <IonButton className='header__button' routerLink='/home'>
        Home
      </IonButton>
      <IonButton className='header__button' routerLink='/skills'>
        Skills
      </IonButton>
      <IonButton className='header__button' routerLink='/skills'>
        Projects
      </IonButton>
      <IonButton className='header__button' routerLink='/skills'>
        Extra CO
      </IonButton>
      <IonButton className='header__button' routerLink='/skills'>
        Contacts
      </IonButton>
    </>
  );
};

export default Header;
