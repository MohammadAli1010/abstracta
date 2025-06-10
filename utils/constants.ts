import { isDev } from "./helpers";

export const pricingPlans = [
  {
    name: "Basic",
    price: 9,
    description: "For casual users and learners",
    items: [
      "5 PDF Summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink:"https://buy.stripe.com/test_eVqaEZ7488UN4FN7fp9sk00",
    // paymentLink:
    //   isDev
    //     ? "https://buy.stripe.com/test_eVqaEZ7488UN4FN7fp9sk00"
    //     : "",
    priceId:
      "price_1RV1VQR947lRU6w62LP8zIHK",
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
    paymentLink:"https://buy.stripe.com/test_cNibJ32NS5IBfkr8jt9sk01",
    priceId:"price_1RV1WUR947lRU6w6wLVXy2W1",
  },
];

export const containerVariants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20},
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

//future changes - can make the isDev work