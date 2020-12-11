import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonThumbnail,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import ball from '../images/ball.jpg';
import cook from '../images/cook.jpg';
import comp from '../images/comp.jpg';
import movie from '../images/movie.jpg';
import Logout from './LogoutButton';

// Activities will be map/loop below
const activities = [
  {
    name: 'Playing games',
    img: comp,
  },
  {
    name: 'Cooking',
    img: cook,
  },
  {
    name: 'Basketball',
    img: ball,
  },
  {
    name: 'Watching movies',
    img: movie,
  },
];

const ExtraCo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Extra Curriculum activities</IonTitle>
          <Logout />
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          {activities.map((activity, i) => (
            <IonItem key={i}>
              <IonThumbnail slot='start'>
                <img src={activity.img} />
              </IonThumbnail>
              <IonLabel>
                <h2>{activity.name}</h2>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <Logout />
    </IonPage>
  );
};

export default ExtraCo;
