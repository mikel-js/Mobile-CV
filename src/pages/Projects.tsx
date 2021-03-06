// Michael Castro
// 1902459

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import ionic from '../images/ionic.jpg';
import portfolio from '../images/portfolio.jpg';
import cov from '../images/cov.jpg';
import jokes from '../images/jokes.jpg';
import guess from '../images/guess.jpg';

import Logout from './LogoutButton';

// Projects will be map below, and will show a pretty awesome lists
const projects = [
  {
    name: 'Ionic CV',
    desc: 'My online CV app',
    link: 'https://github.com/mikel-js/Mobile-CV',
    pic: ionic,
  },
  {
    name: 'Personal Website',
    desc: 'My online protfolio',
    link: 'https://mikelcastro.netlify.app/',
    pic: portfolio,
  },
  {
    name: 'Covid Tracker App',
    desc: 'App that has info on Covid19',
    link: 'http://www.breakingcovid19.com/',
    pic: cov,
  },
  {
    name: 'Cheezy App',
    desc: 'App that has funny/not so funny jokes',
    link: 'https://cheesyjokes.herokuapp.com/',
    pic: jokes,
  },
  {
    name: 'Simple guessing game',
    desc: 'A guessing game app',
    link: 'https://mikelgame.netlify.app/',
    pic: guess,
  },
];

const Projects: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {projects.map((proj, i) => (
          <IonCard key={i}>
            <IonCardContent>
              <IonImg src={proj.pic} className='projectImage'></IonImg>
              <IonCardHeader>
                <IonCardSubtitle>
                  {' '}
                  <a href={proj.link} target='blank'>
                    {proj.link}
                  </a>
                </IonCardSubtitle>
                <IonCardTitle>{proj.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{proj.desc}</IonCardContent>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
      <Logout />
    </IonPage>
  );
};

export default Projects;
