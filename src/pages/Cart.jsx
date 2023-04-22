import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex justify-center">
  {
    cart.length > 0  ? 
    (<div className="flex gap-24 justify-between">


      <div className="">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between mt-10 mb-10">

        <div>
          <div className="uppercase text-[#17BF58] font-semibold">Your Cart</div>
          <div className="uppercase text-[#17BF58] text-4xl font-bold">Summary</div>
          <p className="font-bold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="font-bold mb-3">Total Amount: ${totalAmount.toFixed(2)}</p>
          <button className="bg-[#17BF58] py-2 px-10 rounded-lg">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center gap-32">
      <h1 className="font-bold py-2 px-5 text-xl mt-24">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-[#17BF58] py-2 px-10 rounded-lg text-white">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
