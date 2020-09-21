import React from 'react';
import {
  Input,
  Modal,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { login } from '../../helpers/requestHelper';

const LoginModal = (props) => {
  let { isOpen, toggleModal } = props


  return (
    <Modal isOpen={isOpen} >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Sign In</h5>
            <button id="close-loginModal" type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => toggleModal()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container text-center pt-1" style={{width: "370px"}}>
              <form id="form-signin" onSubmit={(event) => {
                event.preventDefault();
                login(event);
              }}>
                <div className="form-group-row pt-2">
                  <Input type="username" name="username" id="inputUsername" className="form-control pt-2" placeholder="Username" required=""></Input>
                </div>
                <div className="form-group-row pt-2">
                  <Input type="password" name="password" id="inputPassword" className="form-control pt-2" placeholder="Password" required=""></Input>
                </div>
                <div className="form-group-row pt-2 pb-3">
                  <Button id="login-button" className="btn btn-md btn-primary btn-block" className="submit" type="submit">Sign in</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <Link className="pt-1" to="/create_account">Create an Account</Link>
          </div>
        </div>
    </Modal>
  );
};

export default LoginModal;