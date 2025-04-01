import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

export const getStripe = async () => {
  if (!stripePromise) {
    const res = await fetch("http://localhost:8080/api/stripe/public-key");
    const { publicKey } = await res.json();
    stripePromise = await loadStripe(publicKey);
  }
  return stripePromise;
};