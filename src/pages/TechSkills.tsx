// Michael Castro
// 1902459

import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import ionic from '../images/ionic.jpg';

import Logout from './LogoutButton';

// Skills will be mapped below and will have a list type approacg
const skills = [
  {
    skills: 'HTML',
    desc: 'Skeleton of a website',
    img: html,
  },
  {
    skills: 'CSS',
    desc: 'Style/design',
    img: css,
  },
  {
    skills: 'JavaScript',
    desc: 'Functionalities of an app',
    img: js,
  },
  {
    skills: 'React',
    desc: 'A JS library for building UIs',
    img: react,
  },
  {
    skills: 'Ionic',
    desc: 'UI toolkit for building mobile App',
    img: ionic,
  },
];

const TechSkills: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Skills</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          {skills.map((e, i) => (
            <IonItem key={i}>
              <IonAvatar>
                <img src={e.img} alt={e.skills} />
              </IonAvatar>
              <IonLabel className='ion-padding'>
                <h2>{e.skills}</h2>
                <p>{e.desc}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <Logout />
    </IonPage>
  );
};

export default TechSkills;
