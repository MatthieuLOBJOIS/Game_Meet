import {LOG_IN, checkLogged} from '../actions/user';
import fire from '../config/fire';

const userMiddleware = (store: any) => (next: any) => (action: any) => {
  switch (action.type) {
    case LOG_IN: {
      let mail = store.getState().user.mail;
      let password = store.getState().user.password;
      //console.log('loginned', mail, password)
      fire.auth().signInWithEmailAndPassword(mail, password)
      .then((response)=> {
        console.log(response, 'success');
        store.dispatch(checkLogged(true));
      })
      .catch((err) => {
        console.warn(err, 'error')
        store.dispatch(checkLogged(false));
      })
    }
    default:
      next(action);  
  }
};
export default userMiddleware;
