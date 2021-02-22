import * as React from 'react';
import { Typography, Row, Col, Avatar, Dropdown, Icon, Layout } from 'antd';

import DropdownMenu from './DropdownMenu';

interface Profile {
  id: number
  name: string
  username: string
  avatar: string
}

export interface Props {
  profile: Profile,
}

const HeaderComponent = ({
  profile,
}: Props) => (
  <Layout.Header>
    <Row type="flex" justify="space-between">
      <Col>
        <Typography.Text className="logo">THE MOVIE DB</Typography.Text>
      </Col>

      {profile && (
        <Col>
          <div className="profile">
            <figure className="profile__avatar">
              {profile.avatar ? (
                <img
                  className="profile__avatar-img"
                  src={`https://www.gravatar.com/avatar/${profile.avatar}.jpg`}
                  alt={profile.name}
                />
              ) : (
                <Avatar icon="user" />
              )}
            </figure>
            <Dropdown className="profile__dropdown" overlay={<DropdownMenu />}>
              <Typography.Text>
                {profile.username}
                <Icon type="caret-down" />
              </Typography.Text>
            </Dropdown>
          </div>
        </Col>
      )}
    </Row>
  </Layout.Header>
);

export default HeaderComponent;
