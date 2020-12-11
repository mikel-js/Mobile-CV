// Necessary imports
import React from 'react';
import { Route } from 'react-router-dom';
// Ionic components
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// Routes
import Home from './Home';
import TechSkills from './TechSkills';
import Projects from './Projects';
import ExtraCo from './ExtraCo';
import Contacts from './Contacts';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import {
  home,
  codeWorkingOutline,
  logoIonic,
  basketball,
  call,
} from 'ionicons/icons';

const Index: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/home' component={Home} exact={true} />
            <Route path='/skills' component={TechSkills} exact={true} />
            <Route path='/projects' component={Projects} exact={true} />
            <Route path='/activities' component={ExtraCo} exact={true} />
            <Route path='/contact' component={Contacts} exact={true} />
          </IonRouterOutlet>
          {/* These are the tabs to be shown */}
          <IonTabBar slot='bottom'>
            <IonTabButton tab='Home' href='/home'>
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab='Skills' href='/skills'>
              <IonIcon icon={codeWorkingOutline} />
              <IonLabel>Skills</IonLabel>
            </IonTabButton>
            <IonTabButton tab='Projects' href='/projects'>
              <IonIcon icon={logoIonic} />
              <IonLabel>Projects</IonLabel>
            </IonTabButton>
            <IonTabButton tab='Extra CO' href='/activities'>
              <IonIcon icon={basketball} />
              <IonLabel>Extra CO</IonLabel>
            </IonTabButton>
            <IonTabButton tab='Contacts' href='/contact'>
              <IonIcon icon={call} />
              <IonLabel>Contacts</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Index;
