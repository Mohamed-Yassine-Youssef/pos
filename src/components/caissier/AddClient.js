import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
const AddClient = () => {
  const { user } = useContext(Context);
  const [address, setAddress] = useState();
  const [birthDate, setBirthDate] = useState();
  const [cin, setCin] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const ajouterClient = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.post(
        "/api/client/",
        {
          address,
          birthDate,
          cin,
          email,
          name: firstName + " " + lastName,
          phoneNumber,
        },
        config
      );
      window.location.replace("/caissiere/gestion_client");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="custom-toggle"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        + ajouter client
      </button>
      {/* Modal */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ajouter client
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">CIN</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCode"
                    placeholder="CIN"
                    onChange={(e) => {
                      setCin(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCode"
                    placeholder="Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputNom"
                      placeholder=" prénom"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nom </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputNom"
                      placeholder=" Nom"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Date Naissance</label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputDate"
                      placeholder="Date Naissance du client client"
                      onChange={(e) => {
                        setBirthDate(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputTel">telephone</label>
                    <input
                      type="telephone"
                      className="form-control"
                      id="exampleInputTel"
                      aria-describedby="phoneHelp"
                      placeholder="Enter telephone"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={ajouterClient}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
