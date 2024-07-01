import React, { useState } from "react";
import "./Favourite.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  deleteItem,
  increseItem,
} from "../../features/cart/cartSlice";
import { DelFavItem } from "../../features/fav/favSlice";
const Favourite = () => {
  var totalcost = 0;
  const favItems = useSelector((state) => state.fav);
  console.log(favItems);
  const dispatch = useDispatch();
  function deleteProduct(product) {
    dispatch(DelFavItem(product));
  }
  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <section className="all-fav">
        <div className="shooping-title">
          <h1>Your Favorite Products</h1>
        </div>
        <div className="container">
          <div className="iteams-with-checkout">
            <div className="fav-items mt-3">
              <div className="title-products title-fav-products">
                <h4>Favorite Items </h4>
                <h4>{favItems.length} items</h4>
              </div>{" "}
              <hr />
              <table>
                <thead>
                  <tr>
                    <th className="head-title ps-2">Product Details</th>
                    <th className="head-title ps-4 ">Price</th>
                    <th className="head-title ps-3">ADD to Cart</th>
                    <th className="head-title ps-4">DElete</th>
                  </tr>
                </thead>
                {favItems.length === 0 ? (
                  <div className=""></div>
                ) : (
                  <>
                    {favItems.map((item, index) => {
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
                            <td className="price-item">{item.price} $</td>
                            <td>
                              <button
                                className="default-btn add-fav"
                                onClick={() => {
                                  addProduct(item);
                                  deleteProduct(item);
                                }}
                              >
                                Add To Cart
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger del-button del-fav"
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
              {favItems.length === 0 ? (
                <div className="no-fav">
                  {" "}
                  <h2>No Favorite Products </h2>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Favourite;
