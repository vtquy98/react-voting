import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
import { compose } from 'recompose';

import RenderSelectedImageFieldComponent from './FormField/RenderSelectedImageFieldComponent';
import RenderTextAreaFieldComponent from './FormField/RenderTextAreaFieldComponent';

const withForm = reduxForm({
  form: 'create_voting',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
  //   validate });
});

const enhance = compose(
  // connectToRedux,
  withForm
);

const VotingDescriptionForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1">
          <h6>Image desciption</h6>
          <Field
            name="imageDescription"
            component={RenderSelectedImageFieldComponent}
            type="file"
          />
        </div>

        <div className="col-sm-6">
          <h6>Voting's description</h6>
          <Field
            name="description"
            type="text"
            component={RenderTextAreaFieldComponent}
            rows="7"
          />
        </div>
      </div>

      <div className="wizard-footer">
        <div className="pull-right">
          <input
            className="btn btn-next btn-fill btn-rose btn-wd"
            type="submit"
            value="Next"
          />
        </div>
        <div className="clearfix"></div>
      </div>
    </form>
  );
};

export default enhance(VotingDescriptionForm);
