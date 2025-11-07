import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const buyMembership = async (membershipType)=> {
    const res = await fetch(BASE_URL + "/payment/create", {
      body: JSON.stringify({ membershipType }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const order = await res.json();
    console.log(order);

    const {amount, notes, currency, order_id} = order.data;

    // Open Razorpay Checkout
    const options = {
      key: order.keyId,
      amount,
      currency,
      order_id, // This is the order_id created in the backend
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.email,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <div className="w-screen">
      <h1 className="text-6xl text-center mb-4">Premium</h1>
      <div className="flex">
        <div className="card bg-base-300 rounded-box grid grow place-items-center">
          <h1 className="text-3xl mb-2">Buy silver membership</h1>
          <ul>
            <li>100 connnection requests per day</li>
            <li>1000 message per day</li>
            <li>Blue tick for 1 year</li>
          </ul>
          <button
            onClick={() => buyMembership("silver")}
            className="btn btn-primary"
          >
            Buy silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid grow place-items-center">
          <h1 className="text-3xl mb-2">Buy gold membership</h1>
          <ul>
            <li>Unlimited connection requests per day</li>
            <li>10000 message per day</li>
            <li>Blue tick for 2 year</li>
          </ul>
          <button
            onClick={() => buyMembership("gold")}
            className="btn btn-secondary"
          >
            Buy gold
          </button>
        </div>
      </div>
    </div>
  );
}

export default Premium