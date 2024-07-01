import React, { useState } from "react";
import "./CartShopping.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  deleteItem,
  increseItem,
} from "../../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
const CartShopping = () => {
  const navigate = useNavigate();
  var totalcost = 0;
  const [shipping, setShipping] = useState(10);
  const myItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function increaseProduct(product, newStock) {
    dispatch(increseItem(product, newStock));
  }
  function decreaseProduct(product) {
    dispatch(decreaseItem(product));
  }
  function deleteProduct(product) {
    dispatch(deleteItem(product));
  }

  return (
    <>
      <section className="all-carts">
        <div className="shooping-title">
          <h1>Your Shopping Cart</h1>
        </div>
        <div className="container">
          <div className="iteams-with-shopping-cart ">
            <div className="cart-items mt-3">
              <div className="title-products">
                <h4>Shopping Cart</h4>
                <h4>{myItems.length} items</h4>
              </div>{" "}
              <hr />
              <table>
                <thead>
                  <tr>
                    <th className="head-title">Product Details</th>
                    <th className="head-title">Quantity</th>
                    <th className="head-title">Price</th>
                    <th className="head-title">Total</th>
                    <th className="head-title">delete</th>
                  </tr>
                </thead>
                {myItems.length === 0 ? (
                  <div></div>
                ) : (
                  <>
                    {myItems.map((item, index) => {
                      totalcost += item.price * item.qty;
                      return (
                        <tbody key={index}>
                          <tr className="one-tr">
                            <td>
                              <p className="mt-3">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="item-img"
                                />
                                <span className="ms-3 name-item">
                                  {item.title.substring(0, 11)}
                                </span>
                                <p className="text-center">
                                  {" "}
                                  <span className="base-color">
                                    Category :
                                  </span>{" "}
                                  {item.category}
                                </p>
                              </p>
                            </td>
                            <td>
                              {" "}
                              <button
                                className="btn btn-secondary increment-button"
                                onClick={() => decreaseProduct(item)}
                              >
                                {" "}
                                -{" "}
                              </button>{" "}
                              <span className="mx-3 fw-bold">
                                {item.qty}
                              </span>{" "}
                              <button
                                className="btn btn-secondary decrement-button"
                                onClick={() => increaseProduct(item, 1)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </td>
                            <td className="price-item">{item.price} $</td>
                            <td className="total-item">
                              {item.price * item.qty} $
                            </td>
                            <td>
                              <button
                                className="btn btn-danger py-1 px-2 del-btn"
                                onClick={() => {
                                  deleteProduct(item);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </>
                )}
              </table>
              {myItems.length === 0 ? (
                <div className="no-fav">
                  {" "}
                  <h2>Your Cart is Empty</h2>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="total-cost">
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
              <button
                className="default-btn w-100"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartShopping;
