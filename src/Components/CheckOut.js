import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem } from "../redux/slice";
const Cart = () => {
  const thali = useSelector((state) => state.counter.thali);

  console.log(thali);
  const despatch = useDispatch();
  const Remove = (id) => {
    despatch(RemoveItem(id));
  };
  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div className="container  mx-3">
      <h1 className="text-center text-warning my-4 food">Your Bucket Info</h1>
      <div className="row">
        <table>
          <thead>
            <th>Name</th>
            <th className="head_table">Price</th>
            <th className="head_table">Quantity</th>
            <th className="head_table">Total Price</th>
            <th className="head_table"> Action</th>
          </thead>

          {thali.map((ele, i) => {
            return (
              <tbody key={i}>
                <td className="list_name"> {ele.name}</td>
                <td className="list_name head_table"> {`${ele.price}`}</td>
                <td className="list_name head_table"> {ele.quantity}</td>
                <td className="list_name head_table"> {`${ele.totalPrice}`}</td>
                <td className="list_name head_table">
                  {" "}
                  <button onClick={() => Remove(i)} className="btn btn-warning">
                    Remove
                  </button>
                </td>
              </tbody>
            );
          })}
        </table>
        <h3 className="text-center my-5">
          <span className="grand">Your Grand total price: </span> {sum}
          <span> RS/-</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
