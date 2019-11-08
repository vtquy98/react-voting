import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  addVotingInfo,
  addVotingInfoDataSelector,
  getVoting,
  getVotingDataSelector
} from '../stores/VotingState';
import WizardFormSecondPage from './VotingCandidateForm';
import VotingDescriptionForm from './VotingDescriptionForm';
import WizardFormThirdPage from './VotingTimeForm';

const connectToRedux = connect(
  createStructuredSelector({
    votingData: getVotingDataSelector,
    successMessage: addVotingInfoDataSelector
  }),
  dispatch => ({
    GetVoting: id => dispatch(getVoting(id)),
    AddVotingInfo: ({ votingId, ...values }) =>
      dispatch(addVotingInfo({ votingId, ...values }))
  })
);

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  componentDidMount() {
    const { votingId } = this.props;
    this.props.GetVoting(votingId.id);
  }

  render() {
    const { votingData, AddVotingInfo, successMessage } = this.props;
    const { page } = this.state;
    const votingId = this.props.votingId.id;
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="col-sm-8 col-sm-offset-2">
            {successMessage && successMessage.id ? (
              <div>
                {' '}
                <div className="wizard-container">
                  <div
                    className="card wizard-card"
                    data-color="rose"
                    id="wizardProfile"
                  >
                    <div className="wizard-header">
                      <div className="swal2-icon swal2-success animate">
                        <span className="line tip animate-success-tip"></span>{' '}
                        <span className="line long animate-success-long"></span>
                        <div className="placeholder"></div>{' '}
                        <div className="fix"></div>
                      </div>
                      <h3 className="wizard-title">
                        {votingData && votingData.name.toUpperCase()} has been
                        created successfully!
                      </h3>
                    </div>
                    <div className="tab-content">
                      <div className="row">
                        <div className="center">
                          <div className="col-md-4">
                            <div
                              className="alert alert-warning alert-with-icon"
                              data-notify="container"
                            >
                              <i className="material-icons" data-notify="icon">
                                settings_applications
                              </i>

                              <span data-notify="message">
                                You can modify your voting
                              </span>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div
                              className="alert alert-info alert-with-icon"
                              data-notify="container"
                            >
                              <i className="material-icons" data-notify="icon">
                                present_to_all
                              </i>

                              <span data-notify="message">
                                Present this voting now
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="wizard-container">
                <div
                  className="card wizard-card"
                  data-color="rose"
                  id="wizardProfile"
                >
                  <div className="wizard-header">
                    <h3 className="wizard-title">
                      {votingData && votingData.name}
                    </h3>
                    <h5>
                      This information will let everyone know more about the
                      voting
                    </h5>
                  </div>
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-lg-12">
                        {page === 1 && (
                          <VotingDescriptionForm onSubmit={this.nextPage} />
                        )}
                        {page === 2 && (
                          <WizardFormSecondPage
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                          />
                        )}
                        {page === 3 && (
                          <WizardFormThirdPage
                            previousPage={this.previousPage}
                            onSubmit={values =>
                              AddVotingInfo({ votingId, ...values })
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <style jsx>{`
          .material-icons {
            left: 45%;
          }
          .card .tab-content {
            margin-top: 0;
          }
          .center {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connectToRedux(WizardForm);
