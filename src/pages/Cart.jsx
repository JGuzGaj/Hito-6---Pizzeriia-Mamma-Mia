import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, increase, decrease, total } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between mb-3"
        >
          <h5>{item.name}</h5>

          <div>
            <button
              className="btn btn-danger me-2"
              onClick={() => decrease(item.id)}
            >
              -
            </button>

            {item.count}

            <button
              className="btn btn-primary ms-2"
              onClick={() => increase(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}