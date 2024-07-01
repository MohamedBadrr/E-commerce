import React, { useState } from "react";
import "./CheckOut.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  deleteItem,
  increseItem,
} from "../../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const CheckOust = () => {
  const navigate = useNavigate();
  var totalcost = 0;
  const [shipping, setShipping] = useState(10);
  const myItems = useSelector((state) => state.cart);
  const [firstName, SetFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [showAlert, setShow] = useState(false);

  return (
    <>
      <section className="all-carts">
        <div className="shooping-title">
          <h1>Check Out</h1>
        </div>
        <div className="container">
          <div className="iteams-with-checkout">
            <div className="cart-items mt-4 mb-5">
              <form
                className="formCheck"
                onSubmit={(e) => {
                  setShow(true);
                }}
              >
                <h1 className="base-color fw-bold mb-3">Checkout Form</h1>
                {showAlert && (
                  <div className="alert alert-success p-2 w-75 text-dark text-center">
                    Your Request Prossed Successfully
                  </div>
                )}
                <div className="d-flex align-items-center justify-content-between w-75 names">
                  <div class="form-grouP">
                    <label for="first-name" className="label-checkout">
                      First Name <span class="required text-danger">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      value={firstName}
                      onChange={(e) => {
                        SetFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-grouP">
                    <label for="last-name" className="label-checkout">
                      Last Name <span class="required text-danger">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="form-grouP">
                  <label for="street-address" className="label-checkout">
                    Street Address <span class="required text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="street-address"
                    name="street-address"
                    required
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>

                <div class="form-grouP">
                  <label for="town-city" className="label-checkout">
                    Country <span class="required text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="town-city"
                    name="town-city"
                    required
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div class="form-grouP">
                  <label for="province" className="label-checkout">
                    City <span class="required text-danger">*</span>
                  </label>
                  <select
                    id="province"
                    name="province"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    required
                  >
                    <option value=""></option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="ALex">ALex</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="phone-number" className="label-checkout">
                    Phone Number <span class="required text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="phone-number"
                    name="phone-number"
                    required
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" className="default-btn finishButton">
                  Finish
                </button>
              </form>
            </div>

            <div className="total-cost mt-4">
              <h3>Orders Summary</h3>
              <hr />
              <div className="oreders-number">
                <div>{myItems.length} ITEAMS</div>
                <div>{totalcost} $</div>
              </div>
              <hr />
              <h4 className="shipping-title">Shipping</h4>
              <div className="shipping-options mb-2">
                <div id="form-type">
                  <input
                    id="standerd"
                    required
                    type="radio"
                    checked
                    onClick={() => {
                      setShipping(10);
                    }}
                    name="typeOfForm"
                    value="person"
                    className="typeOfuser"
                  />
                  <label htmlFor="standerd" className="ms-3 option">
                    {" "}
                    Standerd Shipping ( 10% )
                  </label>
                </div>
                <div id="form-type">
                  <input
                    id="fast"
                    required
                    type="radio"
                    onClick={() => {
                      setShipping(25);
                    }}
                    name="typeOfForm"
                    value="person"
                    className="typeOfuser"
                  />
                  <label htmlFor="fast" className="ms-3 option">
                    {" "}
                    Fast Shipping ( 25% )
                  </label>
                </div>
              </div>
              <div className="promo">
                <h4>Promo Code</h4>
                <input type="" name="" id="" placeholder="Enter The Code" />
              </div>
              <button className="btn btn-danger mt-3">Apply</button> <hr />
              <div className="final-cost">
                <h4>Total Cost</h4>
                <h4>
                  {Math.floor(totalcost + totalcost * (shipping / 100))} $
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOust;
