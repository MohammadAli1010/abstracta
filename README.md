This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

🧪 Testing Payments with Stripe (Sandbox Mode)
This app uses Stripe for handling payments. You can test out the payment flow using Stripe’s sandbox (test) environment — no real charges will be made.

✅ Test Card Details
To test the checkout flow:

Select a plan from the Pricing section.

Click the Buy Now button.

On the Stripe checkout page, use the following test card details:

Card Number: 4242 4242 4242 4242  
Expiry Date: Any future date (e.g., 12/34)  
CVC: Any 3 digits (e.g., 123)

💡 You can find more test cards in the Stripe Testing Documentation.

⚠️ Important
This application is in test mode and will not process real payments.

Make sure you're using test card numbers — real cards will not work here.

If you're testing locally, ensure your environment variables are correctly set with Stripe test keys.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
