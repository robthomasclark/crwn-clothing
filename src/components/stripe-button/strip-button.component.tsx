import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

interface Props {
    price: number;
}

const onToken = (token: Token)  => {
    console.log("token: ", token);
    alert("Payment Successful!");
}

const StripeCheckoutButton = (props: Props) => {
    const { price } = props;
    const priceForStripe = price * 100; //in cents
    //This should really live in an env variable as it's bad practice to put keys in the repo
    const publishableKey = "pk_test_51I7QToCv3OPvS1ca3b4x8hHxj0LQQiHKkciY4We3KJ7k1gGRgTmEn4j14sgHFAXJ4nxcPHH3JOykx9P2ic2OSO5N00Vav5GSfC";
    return (
        <StripeCheckout label="Pay Now"
            name="Rob The Dev: CRWN CLOTHING"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;