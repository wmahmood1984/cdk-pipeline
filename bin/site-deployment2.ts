#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SiteDeployment2Stack } from '../lib/site-deployment2-stack';

const app = new cdk.App();
new SiteDeployment2Stack(app, 'SiteDeployment2Stack');
