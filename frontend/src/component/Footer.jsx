import React from "react";

function Footer() {
  return (
    <div className="mt-16">
      <div className="bg-gray-200 flex justify-around p-8 font-semibold">
        <div>EASY EXCHANGE</div>
        <div>100% HANDPICKED</div>
        <div>ASSURED QUALITY</div>
      </div>

      <div className="bg-gray-800 text-white text-xs flex justify-evenly p-14 py-32 gap-10">
        <div>
          <h1 className="mb-6">Quick Mart</h1>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li>Who We Are</li>
            <li>Join Our Team</li>
            <li>Terms & Conditions</li>
            <li>Fees & Payments</li>
            <li>Returns & Refund Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-6">Help</h1>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li>Track Your Order</li>
            <li>Frequently Asked Questions</li>
            <li>Returns</li>
            <li>Cancellations</li>
            <li>Payments</li>
            <li>Customer Care</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-6">Shop By</h1>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Indie</li>
            <li>Stores</li>
            <li>New Arrivals</li>
            <li>Home</li>
            <li>Collections</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-6">Follow Us</h1>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>X</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
