import React from 'react';
import NormalLayout from '../layouts/NormalLayout';
import AuthenHOC from '../components/HOC/AuthenHOC';
import CreateVotingComponent from '../components/CreateVotingComponent';

const CreateVotingPage = ({ votingId, ...rootProps }) => (
  <NormalLayout {...rootProps} title="not config">
    <CreateVotingComponent votingId={votingId} />
  </NormalLayout>
);

CreateVotingPage.getInitialProps = ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    votingId: { id }
  };
};

export default AuthenHOC(CreateVotingPage);
