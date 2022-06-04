import React from 'react';
import MainLayout from 'Layouts/HomeLayout';
import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
