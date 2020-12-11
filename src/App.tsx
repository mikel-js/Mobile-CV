import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
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
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TechSkills from './pages/TechSkills';
import Projects from './pages/Projects';
import ExtraCo from './pages/ExtraCo';
import Contacts from './pages/Contacts';
import Index from './pages/IndexPage';

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

/* Theme variables */
import './theme/variables.css';

import {
  ellipse,
  square,
  triangle,
  home,
  codeWorkingOutline,
  logoIonic,
  basketball,
  call,
} from 'ionicons/icons';

const App: React.FC = () => {
  const [log, setLog] = useState(false);
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonTabs> */}
        <IonRouterOutlet>
          <Route path='/' component={Landing} exact={true} />
          <Route path='/login' component={Login} exact={true} />
          <Route path='/register' component={Register} exact={true} />
          <Route path='/index' component={Index} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
