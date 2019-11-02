import React from 'react';
import UserDashboardComponent from '../components/UserDashboardComponent';

import EmptyPageLayout from '../layouts/EmptyPageLayout';
const BlogsPage = rootProps => (
  <EmptyPageLayout {...rootProps} title="not config">
    <UserDashboardComponent />
  </EmptyPageLayout>
);

export default BlogsPage;
