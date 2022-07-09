import { useContext, useRef, useState } from "react";
// import HomeCard from "../card/HomeCard";
import Basket from "../components/Basket";
import Main from "../components/Main";
import { ProductContext } from "../contexts/ProductContext";

function HomePage() {
  const { products } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log(product);
    const idx = cartItems.findIndex((x) => x.id === product.id);
    const newCart = [...cartItems];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...product, qty: 1 });
    }
    setCartItems(newCart);
  };

  const onRemove = (product) => {
    // const exist = cartItems.find(x => x.id === product.id)
    if (product.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...product, qty: product.qty - 1 } : x
        )
      );
    }
  };

  const onRemove2 = (product) => {
    const idx = cartItems.findIndex((x) => x.id === product.id);
    if (idx === -1) return;
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  // const handleSubmitCartItem = async (e) => {
  //   try {
  //     e.preventDefault();
  //     await login(userName, password);
  //   } catch (err) {
  //     setError(err.response.data.message);
  //   }
  // };
  return (
    <>
      {/* <div className=" container-fluid p-3 ">
        <div className="d-flex flex-row mb-3 justify-content-center ">
          <div className="d-flex flex-row mb-3"></div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {products.map((el) => (
          <HomeCard key={el.id} product={el} />
        ))}
      </div> */}
      <form>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div className="row">
            <Main
              cartItems={cartItems}
              products={products}
              onAdd={onAdd}
              onRemove={onRemove2}
            />
            <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          </div>
        </div>
      </form>
    </>
  );
}

export default HomePage;
