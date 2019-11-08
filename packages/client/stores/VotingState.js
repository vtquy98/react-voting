import { flow, path } from 'lodash/fp';
import Router from 'next/router';
import { makeFetchAction } from 'redux-api-call';
import { gql } from '../libs/graphql';
import { respondToSuccess } from '../middlewares/api-reaction';

export const CREATE_VOTING = 'CreateVotingAPI';
export const GET_VOTING = 'GetVotingAPI';
export const ADD_VOTING_INFO_API = 'AddVotingInfoAPI';

const AddVotingInfoAPI = makeFetchAction(
  ADD_VOTING_INFO_API,
  gql`
    mutation(
      $votingId: String!
      $imageDescription: String!
      $description: String!
      $candidates: [createCandidateInput]!
      $votingDatetime: DateTime!
      $timeVoting: Int!
    ) {
      create_voting_info(
        votingId: $votingId
        imageDescription: $imageDescription
        description: $description
        candidates: $candidates
        votingDatetime: $votingDatetime
        timeVoting: $timeVoting
      ) {
        id
      }
    }
  `
);

export const addVotingInfo = ({
  votingId,
  imageDescription,
  description,
  candidates,
  votingDatetime,
  timeVoting
}) => {
  return respondToSuccess(
    AddVotingInfoAPI.actionCreator({
      votingId,
      imageDescription,
      description,
      candidates,
      votingDatetime,
      timeVoting: parseInt(timeVoting)
    }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }

      return;
    }
  );
};

export const addVotingInfoDataSelector = flow(
  AddVotingInfoAPI.dataSelector,
  path('data.create_voting_info')
);

const GetVotingAPI = makeFetchAction(
  GET_VOTING,
  gql`
    query($id: String!) {
      get_voting(id: $id) {
        name
      }
    }
  `
);

export const getVoting = id => {
  return respondToSuccess(GetVotingAPI.actionCreator({ id }), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }

    return;
  });
};

export const getVotingDataSelector = flow(
  GetVotingAPI.dataSelector,
  path('data.get_voting')
);

const CreateVotingAPI = makeFetchAction(
  CREATE_VOTING,
  gql`
    mutation($votingName: String!) {
      create_voting(votingName: $votingName) {
        id
      }
    }
  `
);

export const createVoting = votingName => {
  return respondToSuccess(
    CreateVotingAPI.actionCreator({ votingName }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      const votingId = resp.data.create_voting.id;
      Router.push('/create-voting?id=' + votingId);
      return;
    }
  );
};

export const createVotingDataSelector = flow(
  CreateVotingAPI.dataSelector,
  path('data.create_voting')
);

export default {};
