import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VotingDescriptionForm from './VotingDescriptionForm';
import WizardFormSecondPage from './VotingCandidateForm';
import WizardFormThirdPage from './VotingTimeForm';

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

  render() {
    const { onSubmit, values } = this.props;
    console.log(values);
    const { page } = this.state;
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="wizard-container">
              <div
                className="card wizard-card"
                data-color="rose"
                id="wizardProfile"
              >
                <div className="wizard-header">
                  <h3 className="wizard-title">Voting's Name</h3>
                  <h5>This information will let us know more about you.</h5>
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
                          onSubmit={onSubmit}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WizardForm;
