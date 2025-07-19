import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Ri3TFCkI0pnyFvFIk5DEkGiAzDariFal4ejWFupXJALZ3A9NFkUtUiKNBxCSozx7aIpQ3bMbZ8KXvho7PvbYTtN00DZ691p2D"
);

export default stripePromise;
