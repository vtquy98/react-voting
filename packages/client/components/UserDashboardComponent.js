import React from 'react';

const UserDashboardComponent = () => (
  <React.Fragment>
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div
                className="card-header card-header-icon"
                data-background-color="green"
              >
                <i className="material-icons">equalizer</i>
              </div>
              <div className="card-content">
                <h4 className="card-title">Your voting </h4>
                <div className="row">
                  <div className="col-md-5">Bla bla</div>
                  <div className="col-md-6 col-md-offset-1">
                    <div id="worldMap" className="map"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default UserDashboardComponent;
