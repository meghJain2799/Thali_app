import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTothali } from "../redux/slice";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import Cart from "./Cart";

const Thali = () => {
  const [quantity, setQuantity] = useState(1);

  const thaliItems = useSelector((state) => state.counter.thaliitems);
  const dispatch = useDispatch();
  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price);
    dispatch(addTothali(item));
    console.log(addTothali(item));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Banner />
      <Cart />
      <h1 className="header_main mt-2"> Select Your Thali Item</h1>
      <div className="container">
        <div className="row">
          {thaliItems.map((ele, i) => {
            return (
              <div className="main_card" key={i}>
                <div className="col-md-4">
                  <img
                    src={ele.imageurl}
                    className="img-fluid"
                    alt="items Img"
                  />
                </div>
                <div className="col-md-8">
                  <h2> {ele.name} </h2>
                  <h6>{ele.description}</h6>
                  <h3> {`Rs ${ele.price} /-`} </h3>
                  <div className="action">
                    <div className="quantity">
                      <p className="quantity_box" onClick={() => decrement(i)}>
                        -
                      </p>
                      <p className="quantity_hold"> {quantity}</p>
                      <p className="quantity_box" onClick={() => increment(i)}>
                        +
                      </p>
                    </div>

                    <div className="button_holder">
                      <button
                        className="btn btn-warning"
                        onClick={() => add(ele)}
                      >
                        Add to Bucket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thali;
