import * as React from 'react';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

export interface Props {
  sessionId: string
}

const HomeComponent = ({ sessionId }: Props) => sessionId ? <Dashboard /> : <LoginForm />;

export default HomeComponent;
