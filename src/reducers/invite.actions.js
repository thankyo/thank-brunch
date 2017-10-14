import authService from './util/auth';
import { dispatchPromise } from './util/promiseStates';
import { reset } from 'redux-form';

export const INVITE = "INVITE";

export function invite(url) {
  return (dispatch) => {
    let req = new Request(
      "/api/v1/user/invite",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(url)
      });
    let p = authService.signAndFetch(req);
    dispatchPromise(p, INVITE, dispatch).
      then((res) => dispatch(reset("invite")))
  }
}