import { isDev } from "./helpers";

export const pricingPlans = [
  {
    name: "basic",
    price: 9,
    description: "For casual users and learners",
    items: [
      "20 PDF Summaries/month",
      "Standard processing",
      "Email support",
      "PDF Export",
    ],
    id: "basic",
    paymentLink:
      isDev
        ? "https://rzp.io/rzp/UeIRn8I"
        : "",
    priceId:
      isDev ? "plan_QcJUH0oJkXtvmB" : "",
  },
  {
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF Summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    id: "pro",
    paymentLink:
      isDev
        ? "https://rzp.io/rzp/q4l8XTI5"
        : "",
    priceId:
      isDev ? "plan_QcJUSM2I1ap8DU" : "",
  },
];