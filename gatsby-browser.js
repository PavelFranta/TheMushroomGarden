import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import './src/components/Layout/Globals.css';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);
