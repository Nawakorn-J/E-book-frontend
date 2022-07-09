function CartIcon(props) {
  const { countCart } = props;
  return (
    <div className="display-6 col-sm-2">
      <i className="fa-solid fa-sm fa-cart-shopping">{countCart}</i>
    </div>
  );
}

export default CartIcon;
