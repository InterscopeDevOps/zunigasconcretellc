import {
	// FaCoffee,
	FaTshirt} from 'react-icons/fa'

export const OrderStatusEnums = Object.freeze({
	Placed: "Placed",
	Confirmed: "Confirmed",
	Packed: "Packed",
	Shipped: "Shipped"
})
export const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

  
export function reduceProductos(arr) {
	const entries = Object.entries(arr);
	return [...entries]?.map(([categoria, values]) => ({
	  categoria,
	  icon: FaTshirt,
	  values,
	}));
  }