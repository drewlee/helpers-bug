import Application from 'helpers-bug/app';
import config from 'helpers-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setApplication(Application.create(config.APP));

start();

setup(QUnit.assert);
