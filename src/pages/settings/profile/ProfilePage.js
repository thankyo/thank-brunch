import React from "react";
import ConnectedSocial from "./ConnectedSocial";
import { getUser, updateUser } from "reducers/user.actions";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import moment from "moment";

import { fieldWithLabel, LoadingButton, required } from "components/form/form.utils";
import { IconWithText } from "components/Icon";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";

function ProfileEdit({ avatar, handleSubmit, submitting, url, initialValues }) {
  return (
    <div>
      <p className="title is-5 has-text-centered">Profile</p>
      <Form className="profile" onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-one-third">
            <div className="profile-image">
              <figure className="image is-1by1 is-small">
                <img src={avatar} className="is-centered"/>
              </figure>
              <br/>
            </div>
          </div>
          <div className="column is-two-third">
            <Field name="avatar" component={fieldWithLabel} type="url" placeholder="Avatar URL"/>
            <p className="subtitle is-6">We currently do not store profile images, but you can use <a
              href="https://gravatar.com">gravatar</a></p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">

            <Field name="firstName"
                   component={fieldWithLabel}
                   type="string"
                   placeholder="First name"
                   validate={[required]}/>
          </div>
          <div className="column is-half">
            <Field name="lastName" component={fieldWithLabel} type="string"
                   placeholder="Last name" validate={[required]}/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <Field name="email" component={fieldWithLabel} type="email" placeholder="Email" validate={[required]}/>
          </div>
          <div className="column is-half">
            <Field name="dateOfBirth" component={fieldWithLabel} type="date" placeholder="Date Of Birth" disabled/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Field name="bio" component={fieldWithLabel} type="textarea" className="textarea" placeholder="Bio"/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ConnectedSocial profiles={initialValues.profiles} url={url}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <time className="is-small is-pulled-right" date={initialValues.created}>Registration
              date: {moment(initialValues.created).format('LL')}</time>
          </div>
        </div>
        <div className="is-pulled-right">
          <LoadingButton submitting={submitting} className="is-outlined is-primary">
            <IconWithText className="fa fa-save" text="Save"/>
          </LoadingButton>
        </div>
      </Form>
    </div>
  )
}

const mapStateToEditProps = ({ user: { my: { data } = {} }, auth: { url }, form: { profile: { values: { avatar } = {} } = {} } }) => {
  return {
    avatar,
    url,
    initialValues: data
  };
};

const mapDispatchToEditProps = (dispatch) => {
  return {
    onSubmit: (user) => dispatch(updateUser(user))
  };
};

ProfileEdit = connect(mapStateToEditProps, mapDispatchToEditProps)(reduxForm({ form: "profile" })(ProfileEdit));

const ProfileSection = () => (<ProfileEdit/>);


const mapStateToSectionProps = ({ user: { my = {} }}) => my;

const mapDispatchToSectionProps = (dispatch) => {
  dispatch(getUser("my"));
  return {}
};

export default connect(mapStateToSectionProps, mapDispatchToSectionProps)(componentFactory(ProfileSection, spinnerFactory(300)));