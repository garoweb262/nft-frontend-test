import React from "react";
import { IoClose } from "react-icons/io5";
const NftDetails = ({ closeModal, title, price, image, link, description }) => {
  return (
    <div className="flex flex-col my-5">
      <div
        className="absolute right-2 top-2 cursor-pointer"
        onClick={closeModal}
      >
        <IoClose size={28} />
      </div>
      <div className="my-3 px-2">
        <div className="flex flex-row space-x-4">
          <div>
            <img
              className="w-60 h-60 object-cover rounded-xl"
              src={image}
              alt="nft"
            />
          </div>
          <div className="flex flex-col space-y-4 text-center">
            <h3 className="text-gray-500 text-xl font-bold font-mont mb-2">
              {title}
            </h3>
            <p className="text-gray-700 font-semi-bold text-lg">{price}</p>

            <p className="text-gray-700 font-light">{description}</p>
            <div className="my-3">
              <a href={link}>
                <button className="py-2 px-4 bg-blue-400 text-white rounded-md">
                  See More details
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
