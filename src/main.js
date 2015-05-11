'use strict';

import React from 'react-native';
import App from './components/App';
import secrets from './secrets';

let SimpleAuthWrapper = require('NativeModules').SimpleAuthWrapper;

SimpleAuthWrapper.configure('twitter', secrets.twitter);

React.AppRegistry.registerComponent('fridayfilmclub', () => App);
