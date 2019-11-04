import React from 'react';

const CreateVotingComponent = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="col-sm-8 col-sm-offset-2">
        <div className="wizard-container">
          <div
            className="card wizard-card"
            data-color="rose"
            id="wizardProfile"
          >
            <form action="wizard.html" method="">
              <div className="wizard-header">
                <h3 className="wizard-title">Build Your Profile</h3>
                <h5>This information will let us know more about you.</h5>
              </div>
              <div className="wizard-navigation">
                <ul>
                  <li>
                    <a href="wizard.html#about" data-toggle="tab">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="wizard.html#account" data-toggle="tab">
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="wizard.html#address" data-toggle="tab">
                      Address
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane" id="about">
                  <div className="row">
                    <h4 className="info-text">
                      {' '}
                      Let's start with the basic information (with validation)
                    </h4>
                    <div className="col-sm-4 col-sm-offset-1">
                      <div className="picture-container">
                        <div className="picture">
                          <img
                            src="static/assets/img/default-avatar.png"
                            className="picture-src"
                            id="wizardPicturePreview"
                            title=""
                          />
                          <input type="file" id="wizard-picture" />
                        </div>
                        <h6>Choose Picture</h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="material-icons">face</i>
                        </span>
                        <div className="form-group label-floating">
                          <label className="control-label">
                            First Name
                            <small>(required)</small>
                          </label>
                          <input
                            name="firstname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="material-icons">record_voice_over</i>
                        </span>
                        <div className="form-group label-floating">
                          <label className="control-label">
                            Last Name
                            <small>(required)</small>
                          </label>
                          <input
                            name="lastname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-lg-offset-1">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="material-icons">email</i>
                        </span>
                        <div className="form-group label-floating">
                          <label className="control-label">
                            Email
                            <small>(required)</small>
                          </label>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="account">
                  <h4 className="info-text">
                    {' '}
                    What are you doing? (checkboxes){' '}
                  </h4>
                  <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                      <div className="col-sm-4">
                        <div className="choice" data-toggle="wizard-checkbox">
                          <input type="checkbox" name="jobb" value="Design" />
                          <div className="icon">
                            <i className="fa fa-pencil"></i>
                          </div>
                          <h6>Design</h6>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="choice" data-toggle="wizard-checkbox">
                          <input type="checkbox" name="jobb" value="Code" />
                          <div className="icon">
                            <i className="fa fa-terminal"></i>
                          </div>
                          <h6>Code</h6>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="choice" data-toggle="wizard-checkbox">
                          <input type="checkbox" name="jobb" value="Develop" />
                          <div className="icon">
                            <i className="fa fa-laptop"></i>
                          </div>
                          <h6>Develop</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="address">
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="info-text">
                        {' '}
                        Are you living in a nice area?{' '}
                      </h4>
                    </div>
                    <div className="col-sm-7 col-sm-offset-1">
                      <div className="form-group label-floating">
                        <label className="control-label">Street Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group label-floating">
                        <label className="control-label">Street No.</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-5 col-sm-offset-1">
                      <div className="form-group label-floating">
                        <label className="control-label">City</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group label-floating">
                        <label className="control-label">Country</label>
                        <select name="country" className="form-control">
                          <option disabled="" selected=""></option>
                          <option value="Afghanistan"> Afghanistan </option>
                          <option value="Albania"> Albania </option>
                          <option value="Algeria"> Algeria </option>
                          <option value="American Samoa">
                            {' '}
                            American Samoa{' '}
                          </option>
                          <option value="Andorra"> Andorra </option>
                          <option value="Angola"> Angola </option>
                          <option value="Anguilla"> Anguilla </option>
                          <option value="Antarctica"> Antarctica </option>
                          <option value="...">...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wizard-footer">
                <div className="pull-right">
                  <input
                    type="button"
                    className="btn btn-next btn-fill btn-rose btn-wd"
                    name="next"
                    value="Next"
                  />
                  <input
                    type="button"
                    className="btn btn-finish btn-fill btn-rose btn-wd"
                    name="finish"
                    value="Finish"
                  />
                </div>
                <div className="pull-left">
                  <input
                    type="button"
                    className="btn btn-previous btn-fill btn-default btn-wd"
                    name="previous"
                    value="Previous"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CreateVotingComponent;
