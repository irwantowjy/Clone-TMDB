import "./Modal.css";

const Modal = () => {
  return (
    <div className="px-1">
      <div className="upper-modal">
        <p>Want to rate or add this item to a list?</p>
        <p className="d-flex">Login</p>
      </div>
      <div className="lower-modal">
        <p>Not a member?</p>
        <p>Sign up and join the community</p>
      </div>
    </div>
  );
};

export default Modal;
