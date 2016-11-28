import 'foundation-sites/dist/foundation.min';
import 'foundation-sites/dist/plugins/foundation.core';
import 'foundation-sites/dist/plugins/foundation.tabs';
import 'foundation-sites/dist/plugins/foundation.util.keyboard';
import 'foundation-sites/dist/plugins/foundation.util.timerAndImageLoader';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import dutyHoursRules from './duty-hours-rules';

render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('app'),
);
