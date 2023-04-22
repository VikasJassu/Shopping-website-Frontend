
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import "./CartItem.css";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex max-w-[500px] border-b-2 border-slate-500 mb-8 mt-9">

      <div className="flex gap-10 mb-7">

        <div className="max-w-[150px]">
          <img src={item.image} />
        </div>
        <div className="flex flex-col justify-evenly">
          <h1 className="font-bold">{item.title}</h1>
          <h1 className="text-[13px]">{item.description.substring(0 , 81)}...</h1>
          <div className="flex justify-between">
            <p className="font-extrabold text-[#17BF58]">${item.price}</p>
            <div className="text-red-700 deleteButton"
            onClick={removeFromCart}>
              <MdDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
