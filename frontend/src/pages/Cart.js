import { Fragment, useState } from 'react'
import { toast } from "react-toastify";

const Cart = ({ cardetails, setCardetails }) => {

  const [completed, setCompleted] = useState(false);

  console.log(cardetails);


  const increaseQty = (item) => {

    console.log(item.product.stock);


    if (item.product.stock == item.qty) {
      return;
    }
    const updatedCardetails = cardetails.map((x) => {
      if (x.product._id == item.product._id) {

        x.qty++;

      }
      return x;
    });
    setCardetails(updatedCardetails);
    //setQty((state) => state + 1);


  }
  const decreaseQty = (item) => {
    if (item.qty > 1) {
      const updatedCardetails = cardetails.map((x) => {
        if (x.product._id == item.product._id) {

          x.qty--;

        }
        return x;
      });
      setCardetails(updatedCardetails);
    }

  }

  console.log(cardetails);


  const removeItem = (item) => {

    const deletecar = cardetails.filter((x) => {

      if (x.product._id !== item.product._id) {

        return true;

      }


    });

    setCardetails(deletecar);
  }

  const orderCompleted = () => {

    fetch(process.env.REACT_APP_API_URL + '/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardetails),
    })
      .then(() => {
        setCardetails([]);
        toast.success("Order Placed Successfully");
        setCompleted(true);
      })

  }

  return cardetails.length > 0 ? <Fragment>
    <div className="container container-fluid">
      <h2 className="mt-5">Your Cart: <b>{cardetails.length} items</b></h2>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
          {cardetails.map((item) => (

            <Fragment>
              <hr />
              <div className="cart-item">
                <div className="row">
                  <div className="col-4 col-lg-3">
                    <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115" />
                  </div>

                  <div className="col-5 col-lg-3">
                    <a href="#">{item.product.name}</a>
                  </div>


                  <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                    <p id="card_item_price">{item.product.price}</p>
                  </div>

                  <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                    <div className="stockCounter d-inline">
                      <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
                      <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                      <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
                    </div>
                  </div>

                  <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                    <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeItem(item)}></i>
                  </div>

                </div>
              </div>
            </Fragment>


          ))}

        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>Subtotal:  <span className="order-summary-values">{cardetails.reduce((acc, item) => acc + item.qty, 0)} (Units)</span></p>
            <p>Est. total: <span className="order-summary-values">{cardetails.reduce((acc, item) => acc + item.qty * item.product.price, 0)}</span></p>

            <hr />
            <button id="checkout_btn" onClick={orderCompleted} className="btn btn-primary btn-block">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment> : (!completed ? <h1>No data available</h1> : <Fragment><h1>Order Placed Successfully</h1></Fragment>)

}

export default Cart