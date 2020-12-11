import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonChip,
  IonLabel,
  IonIcon,
  IonAvatar,
} from '@ionic/react';
import {
  logoGithub,
  mailOutline,
  callOutline,
  locationOutline,
} from 'ionicons/icons';
import Logout from './LogoutButton';
// Really simple contacts here
const Contacts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonChip>
          <IonAvatar>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+' />
          </IonAvatar>
          <IonLabel>Michael Angelo Castro</IonLabel>
        </IonChip>
        <IonContent>
          <IonIcon icon={mailOutline} />
          <p>michael.castro@laurea.fi</p>
          <IonIcon icon={callOutline} />
          <p>0469095080</p>
          <IonIcon icon={logoGithub} />
          <p> https://github.com/mikel-js</p>
          <IonIcon icon={locationOutline} />
          <p>Espoo, Finland</p>
        </IonContent>
      </IonContent>
      <Logout />
    </IonPage>
  );
};

export default Contacts;
