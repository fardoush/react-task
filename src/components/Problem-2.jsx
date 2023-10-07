import React, { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import AllContacts from "./AllContacts";
import UsContacts from "./UsContacts";

const Problem2 = () => {
  const [showAllContacts, setShowAllContacts] = useState(false);
  const [showUsContacts, setShowUsContacts] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [allContactsModal, setAllContactsModal] = useState(null);
  const [usContactsModal, setUsContactsModal] = useState(null);
  const [modalC, setModalC] = useState(null);
  const [showOnlyEvenAllContacts, setShowOnlyEvenAllContacts] = useState(false);
  const [showOnlyEvenUsContacts, setShowOnlyEvenUsContacts] = useState(false);
  const allContactsRef = useRef(null);
  const usContactsRef = useRef(null);
  const modalCRef = useRef(null);
  const [contact, setContact] = useState({});

  useEffect(() => {
    if (allContactsRef.current) {
      setAllContactsModal(new Modal(allContactsRef.current));
    }
  }, [allContactsRef.current, setAllContactsModal]);

  useEffect(() => {
    if (usContactsRef.current) {
      setUsContactsModal(new Modal(usContactsRef.current));
    }
  }, [usContactsRef.current, setUsContactsModal]);

  useEffect(() => {
    if (modalCRef.current) {
      setModalC(new Modal(modalCRef.current));
    }
  }, [modalCRef.current, setModalC]);

  const handleContact = (contact) => {
    modalC.show();
    setContact(contact);
  };

  const toggleAllContacts = () => {
    setShowAllContacts(!showAllContacts);
    usContactsModal.hide();
    allContactsModal.show();
    window.location.hash = "#modal-a";
  };

  const toggleUsContacts = () => {
    setShowUsContacts(!showUsContacts);
    allContactsModal.hide();
    usContactsModal.show();
    window.location.hash = "#modal-b";
  };

  const toggleModalC = () => {
    setShowModalC(!showModalC);
    modalC.show();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg"
            style={{ color: "#46139f" }}
            type="button"
            onClick={toggleAllContacts}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg"
            style={{ color: "#ff7f50" }}
            type="button"
            onClick={toggleUsContacts}
          >
            US Contacts
          </button>
        </div>
      </div>
      {/* all contacts modal a */}
      <div
        className="modal fade"
        id="allContactsModal"
        ref={allContactsRef}
        aria-hidden="true"
        aria-labelledby={"allContactsModalToggleLabel"}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="allContactsModalToggleLabel">
                All Contacts-Modal A
              </h5>
              {/* <button
                                type="button"
                                className="btn-close"
                                onClick={() => allContactsModal.hide()}
                            ></button> */}
            </div>
            <div className="modal-body">
           
              <div className="d-flex justify-content-center gap-4 mb-4">
                <button
                  className="btn btn-lg"
                  style={{ color: "#46139f" }}
                  type="button"
                  onClick={toggleAllContacts}
                >
                  All Contacts
                </button>
                <button
                  className="btn btn-lg"
                  style={{ color: "#ff7f50" }}
                  type="button"
                  onClick={toggleUsContacts}
                >
                  US Contacts
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div class="input-group mb-3 w-75">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span class="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </div>
              </div>

              <AllContacts
                onlyEven={showOnlyEvenAllContacts}
                handleContact={handleContact}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="allflexCheckChecked"
                  defaultChecked={showOnlyEvenAllContacts}
                  onChange={(e) => setShowOnlyEvenAllContacts(e.target.checked)}
                />
                <label
                  className="form-check-label"
                  htmlFor="allflexCheckChecked"
                >
                  Only Even
                </label>
              </div>
              <button
                type="button"
                className="btn"
                style={{ border: "1px solid #46139f", background: "#fff" }}
                onClick={() => allContactsModal.hide()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* us contact modal b */}
      <div
        className="modal fade"
        id="usContactsModal"
        ref={usContactsRef}
        aria-hidden="true"
        aria-labelledby={"usContactsModalToggleLabel"}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="usContactsModalToggleLabel">
                Us Contacts-Modal B
              </h5>
              {/* <button
                                type="button"
                                className="btn-close"
                                onClick={() => usContactsModal.hide()}
                            ></button> */}
            </div>
            <div className="modal-body">
            <div className="d-flex justify-content-center gap-4 mb-4">
                <button
                  className="btn btn-lg"
                  style={{ color: "#46139f" }}
                  type="button"
                  onClick={toggleAllContacts}
                >
                  All Contacts
                </button>
                <button
                  className="btn btn-lg"
                  style={{ color: "#ff7f50" }}
                  type="button"
                  onClick={toggleUsContacts}
                >
                  US Contacts
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div class="input-group mb-3 w-75">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span class="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </div>
              </div>
              <UsContacts
                onlyEven={showOnlyEvenUsContacts}
                handleContact={handleContact}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="usflexCheckChecked"
                  defaultChecked={showOnlyEvenUsContacts}
                  onChange={(e) => setShowOnlyEvenUsContacts(e.target.checked)}
                />
                <label
                  className="form-check-label"
                  htmlFor="usflexCheckChecked"
                >
                  Only Even
                </label>
              </div>
              <button
                type="button"
                className="btn"
                style={{ border: "1px solid #46139f", background: "#fff" }}
                onClick={() => usContactsModal.hide()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* us contact modal c */}
      <div
        className="modal fade"
        id="modalC"
        ref={modalCRef}
        aria-hidden="true"
        aria-labelledby={"modalCToggleLabel"}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered px-3">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCToggleLabel">
                Modal C
              </h5>
              {/* <button
                                type="button"
                                className="btn-close"
                                onClick={() => modalC.hide()}
                            ></button> */}
            </div>
            <div className="modal-body">
              {contact && (
                <>
                  <p>
                    <strong>ID:</strong>
                    {contact.id}
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    {contact.phone}
                  </p>
                  <p>
                    <strong>Country:</strong>
                    {contact.country?.name}
                  </p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                style={{ border: "1px solid #46139f", background: "#fff" }}
                onClick={() => modalC.hide()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
