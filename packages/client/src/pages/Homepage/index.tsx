import React, { FC } from 'react';
import {
  HomeDemo,
} from 'containers';
import { MainLayout } from '../../layouts/MainLayout';

const Homepage: FC = () => (
  <MainLayout>
    <HomeDemo />
  </MainLayout>
);

export { Homepage };
