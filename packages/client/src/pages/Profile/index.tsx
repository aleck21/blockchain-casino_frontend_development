import { FC } from 'react';
import { Profile } from 'containers/profile';
import { MainLayout } from '../../layouts/MainLayout';

const ProfilePage: FC = () => (
  <MainLayout>
    <Profile />
  </MainLayout>
);

export { ProfilePage };
