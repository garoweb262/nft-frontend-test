import React, { useState } from "react";
import "animate.css";
import NftModal from "./NftModal";
import NftDetails from "./NftDetails";

const NftCard = () => {
  //card detials
  const cards = [
    {
      image: `https://i.seadn.io/gcs/files/90f2c069b49665ed474213ea331762d2.jpg?auto=format&w=1000`,
      title: "#67900",
      description: "ByOthersideDeployer Otherdeed is the key to claiming",
      price: "1.795 ETH",
      address: "DmMeOnTwitterOtc",
      link: "https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/67900",
    },
    {
      image: `https://i.seadn.io/gae/F1P5TYLUjYNsyMM3x_RWXEf6VS0eLKTocB1KNfTaT1CuT6bixwLi33VJFqtIVw_YTFk0mQ3kyaBz5deQxa-LQYjjXpE67gMA_nVzrbU?auto=format&w=1000`,
      title: "#61313",
      description: "Owned by Shenlong- Otherdeed is the key to claiming",
      price: "18.5 ETH",
      address: "Shenlong-",
      link: "https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/61313",
    },
    {
      image: `https://i.seadn.io/gae/L5ZgqVxzOcc0GfluwhaIlE620T1EOxfjLWT6JVy-RLrk2vmtRHCUabUQ0s_xfH76p2fWdM11EHutYPixtceQN26AIlupTuUslihyDhY?auto=format&w=1000`,
      title: "#75874",
      description: "Otherdeed is the key to claiming",
      price: "2.2 ETH",
      address: "C-x",
      link: "https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/75874",
    },
    {
      image: `https://i.seadn.io/gae/TbjodevqVMR35ke0nwLUhIetkOOIfv81jgcNnCN7YWuVrwMVS78pFpKlopVxwcnkO0Q-urqU6GCJmA9dTjSXWTgqf9bvVCZ38DcGbQ?auto=format&w=1000`,
      title: "#65129",
      description:
        "Otherdeed is the key to claiming land in Otherside. Each have a unique blend of ",
      price: "3.2 ETH",
      address: "246B5D",
      link: "https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/65129",
    },
    {
      image: `https://i.seadn.io/gae/SXRbTX4ldYfC3bb3LdqLg1h8HBIJ0oaEixfR_5YSmNs9dG6QTO3408t60nSp7QQy5goBLN6vXYBD52_wIDcQFgJRrawmq_EHq-R3?auto=format&w=1000`,
      title: "#50604",
      description:
        "Otherdeed is the key to claiming land in Otherside. Each have a unique blend of ",
      price: "2.5987 ETH",
      address: "Cheapest-Blur",
      link: "https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/50604",
    },
    {
      image: `https://i.seadn.io/gae/hR0uRNboA1Y5BGMXR0uNek0822TxSDSJYWU7-U4lz_qhxZzgj8m27KLqGlo8R1YAzd6Z5gPfW7DigMb6-qlc0CL80C9LLX0Q88Jg?auto=format&w=1000`,
      title: "#92938",
      description:
        "Otherdeed is the key to claiming land in Otherside. Each have a unique blend of environment and sediment",
      price: "23.9 ETH",
      address: "777_vault",
      link: "https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/92938",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  //nft details that is passed to the nft details components
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [link, setLink] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);

  const openModal = (title, price, image, link, address, description) => {
    setTitle(title);
    setPrice(price);
    setImage(image);
    setLink(link);
    setAddress(address);
    setDescription(description);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  return (
    <>
      {/* the grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 my-5 md:px-4 px-8 md:px-0">
        {cards.map((props, index) => (
          <Card key={index} {...props} openModal={openModal} />
        ))}
      </div>
      {/* modal that display the nft details */}
      <NftModal
        modalOpen={modalOpen}
        modalClose={closeModal}
        component={
          <NftDetails
            title={title}
            image={image}
            price={price}
            description={description}
            link={link}
            address={address}
            closeModal={closeModal}
          />
        }
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: [400, 600, 600],
          "@media (max-width: 600px)": {
            width: "90%",
            height: "auto",
            maxHeight: "calc(100vh - 120px)",
            overflowY: "scroll",
            mt: 5,
            mb: 20,
          },
          border: "1px solid #FFFFFF",
          borderRadius: "10px",
          boxShadow: 24,
          p: 0,
          height: "auto",
          maxHeight: "none",
        }}
      />
    </>
  );
};
//card component and passing the card details to props
export function Card({
  title,
  price,
  image,
  link,
  address,
  description,
  openModal,
}) {
  return (
    <div
      onClick={() => openModal(title, price, image, link, address, description)}
      className="bg-white w-60 sm:w-full h-full  shadow-md rounded-xl animate__animated animate__slideInLeft cursor-pointer"
    >
      <div className="flex flex-col space-x-2">
        <div>
          <img
            className="w-full h-[200px] object-cover rounded-xl"
            src={image}
            alt="nft"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <h3 className="text-gray-500 text-xl font-bold font-mont mb-2">
              {title}
            </h3>
            <p className="text-gray-700 font-semi-bold text-lg">{price}</p>
          </div>
          <p className="text-gray-700 font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
