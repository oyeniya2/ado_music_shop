import React from "react";
import { BiFacebook } from "./BiFacebook";
import { FlatColorIconsGoogle } from "./FlatColorIconsGoogle";
import { ForgotPassword } from "./ForgotPassword";
import { LargePrimaryButton } from "./LargePrimaryButton";
import { TypeButtonWithout } from "./TypeButtonWithout";
import { TypeLinkState } from "./TypeLinkState";
import "css/sustyle.css";

export const SignUpDefault = () => {
  return (
    <div className="sign-up-default">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="sign-up-form">
            <div className="div">
              <div className="text-wrapper-2">Sign up</div>

              <p className="p">Create an account to get started with us.</p>
            </div>

            <div className="frame-2">
              <div className="frame-3">
                <div className="component-wrapper">
                  <TypeButtonWithout
                    className="component"
                    divClassName="type-button-without-icon-size-xlarge-state-default"
                    icon={
                      <FlatColorIconsGoogle className="icon-instance-node" />
                    }
                    text="Sign up with Google"
                  />
                </div>

                <TypeButtonWithout
                  className="type-button-without-instance"
                  divClassName="type-button-without-icon-size-xlarge-state-default-instance"
                  icon={<BiFacebook className="icon-instance-node" />}
                  text="Sign up with Facebook"
                />
              </div>

              <div className="frame-4">
                <div className="input-field-desktop">
                  <div className="text-wrapper-3">Email</div>

                  <div className="input-with-button">
                    <div className="default">
                      <div className="field">
                        <div className="div-wrapper">
                          <div className="frame-5">
                            <div className="text-wrapper-4">
                              Enter your email address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="input-field-desktop">
                  <div className="text-wrapper-3">Password</div>

                  <div className="input-with-button">
                    <div className="default">
                      <div className="field">
                        <div className="div-wrapper">
                          <div className="frame-5">
                            <div className="text-wrapper-4">
                              Create Password
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="input-field-desktop">
                  <div className="text-wrapper-3">Retype Password</div>

                  <div className="input-with-button">
                    <div className="default">
                      <div className="field">
                        <div className="div-wrapper">
                          <div className="frame-5">
                            <div className="text-wrapper-4">
                              Retype Password
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-6">
              <LargePrimaryButton
                className="large-primary-button-set"
                divClassName="large-primary-button-instance"
                property1="primary"
                property2="disabled"
                property3="large"
                text1="Sign up"
              />
              <div className="frame-7">
                <div className="have-an-account">
                  <ForgotPassword
                    className="forgot-password-instance"
                    divClassName="design-component-instance-node"
                    text="Already Have An Account?"
                  />
                </div>

                <TypeLinkState
                  className="type-link-state-default"
                  divClassName="type-link-state-instance"
                  text="Login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
