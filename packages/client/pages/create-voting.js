import React from 'react';
import NormalLayout from '../layouts/NormalLayout';
import AuthenHOC from '../components/HOC/AuthenHOC';
import CreateVotingComponent from '../components/CreateVotingComponent';

const CreateVotingPage = rootProps => (
  <NormalLayout {...rootProps} title="not config">
    <CreateVotingComponent />
  </NormalLayout>
);

export default AuthenHOC(CreateVotingPage);
