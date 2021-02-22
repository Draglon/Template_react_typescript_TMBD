import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export interface Props {
  sessionId: string
  component: React.ReactNode
}

const PrivateRouteComponent = ({
  component: Component,
  sessionId,
  ...rest
}: Props) => (
  <Route
    {...rest}
    render={(props: any) =>
      (sessionId ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

export default PrivateRouteComponent;
