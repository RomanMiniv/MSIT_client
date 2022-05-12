import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';
import ITStartPage from './components/CoursePages/ITStartPage/ITStartPage';
import PhotoshopPage from './components/CoursePages/PhotoshopPage/PhotoshopPage';
import PythonPage from './components/CoursePages/PythonPage/PythonPage';
import WebDevelopmentPage from './components/CoursePages/WebDevelopmentPage/WebDevelopmentPage';
import RoboticsPage from './components/CoursePages/RoboticsPage/RoboticsPage';
import InternetMarketingPage from './components/CoursePages/InternetMarketingPage/InternetMarketingPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import './services/AnimateOnScroll/AnimateOnScroll';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* To Do: при переході між сторінками скидати скрол і переходити в початок сторінки */}
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/course/IT-start'>
            <ITStartPage />
          </Route>
          <Route exact path='/course/photoshop'>
            <PhotoshopPage />
          </Route>
          <Route exact path='/course/python'>
            <PythonPage />
          </Route>
          <Route exact path='/course/web-development'>
            <WebDevelopmentPage />
          </Route>
          <Route exact path='/course/robotics'>
            <RoboticsPage />
          </Route>
          <Route exact path='/course/internet-marketing'>
            <InternetMarketingPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
