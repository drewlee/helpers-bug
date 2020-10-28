import Application from 'helpers-bug/app';
import config from 'helpers-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
