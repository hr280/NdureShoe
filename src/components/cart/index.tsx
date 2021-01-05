import React from "react";
import { useSelector } from "react-redux";
import { store, remove, clear, inc } from "../../store/index";
import { ProductItem } from "../../store/state";
import "./index.css";
import EmptyCart from "./EmptyCart";
import Footer from "../home/footer";
export default function Cart() {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <>
      <div className="div-cen-empty">
        {products.filter((product) => product.added).length === 0 ? (
          <EmptyCart />
        ) : (
          ""
        )}
      </div>
      {products.filter((product) => product.added).length === 0 ? (
        " "
      ) : (
        <div>
          <div className="table-shop">
          <table className="rwd-table">
            <thead>
              <tr>
                <th>Prouduct Image</th>
                <th>Prouduct Name</th>
                <th>Prouduct Quantity</th>
                <th>Prouduct Price</th>
                <th>Prouduct Total Price</th>
                <th>Remove Prouduct</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((product) => product.added)
                .map((product: ProductItem, i) => (
                  <tr>
                    <td>
                      <img src={product.src} alt={product.name} />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <button
                        className="cart-button"
                        onClick={() => store.dispatch(inc(product))}
                      >
                        +
                      </button>
                      {product.quantity}
                      <button
                        className="cart-button"
                        onClick={() => store.dispatch(remove(product))}
                      >
                        -
                      </button>
                    </td>
                    <td>${product.price}</td>
                    <td>${product.price * product.quantity}</td>
                    <td>
                      {" "}
                      <button
                        className="cart-button remove"
                        onClick={() => store.dispatch(clear(product))}
                      >
                        <span role="img" aria-label="">
                        🗑️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            <h1 className="total">
              Total: $
              {products.reduce(
                (total, pro) => total + pro.price * pro.quantity,
                0
              )}
            </h1>
          </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
