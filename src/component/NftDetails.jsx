import React from "react";
import { IoClose } from "react-icons/io5";
const NftDetails = ({ closeModal, title, price, image, link, description }) => {
  return (
    <div className="flex flex-col items-center my-5 justify-center">
      <div
        className="absolute right-2 top-2 cursor-pointer"
        onClick={closeModal}
      >
        <IoClose size={28} />
      </div>
      <div className="my-3 px-2">
        <p className="capitalize text-2xl font-bold text-center">{title}</p>
      </div>
    </div>
  );
};

export default NftDetails;
