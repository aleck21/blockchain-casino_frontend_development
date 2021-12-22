import { FC } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { Profile } from 'containers/profile';

const ProfilePage: FC = () => (
  <MainLayout>
    <Profile />
  </MainLayout>
);

export { ProfilePage };