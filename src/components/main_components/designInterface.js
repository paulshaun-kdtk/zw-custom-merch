"use client";
import { useState } from "react";
import { Button, Tooltip, Card } from "flowbite-react";
import { Designs } from "./designsList";
import { SearchInput } from "../sub_components/SearchInput";
import { FilterComponent } from "../sub_components/Filters";
import { InformationList } from "../sub_components/InformationList";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

// end imports

export function ClothingDesigner() {
  const [orderedItem, setOrderedItem] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const informationContent = [
    {
      name: "How to order?",
      data: [
        "Scroll through items to see which item you like, you can filter and sort them to quickly find your perfect pick",
        "you can import your own custom design which our team will receive and build according to your specifications",
        "you can also share your designs with friends and family to get more inspiration",
        "click on ther order button and confirm your order to purchase",
        "additionally you can presave an item you like by clicking the add to wishlist button, to purchase it later",
        "you can contact our team if you face any trouble along the way",
        "+263 773 270 686, support@zw_merch.com",
      ],
    },
  ];

  const designs = [
    {
      item_name: "Demon Slayer Shirt",
      item_price_base_currency: "$8",
      item_price_converted_currency: "ZWG160",
      item_category: "menswear, shirt, longsleeve",
      images: [
        "https://i.etsystatic.com/53817694/r/il/06180a/6147512438/il_fullxfull.6147512438_103i.jpg",
        "https://www.meotown.in/cdn/shop/files/3d-tshirt-mockup-on-rock-in-front-of-sea-background-0324_441292c6-f7a6-4b3a-8335-9308a8f14b00.jpg?v=1722453336&width=2048",
      ],
    },
    {
      item_name: "Jujutsu Kaisen Playfull Hoodie",
      item_price_base_currency: "$15",
      item_price_converted_currency: "ZWG300",
      item_category: "menswear, shirt, shortsleeve",
      images: [
        "https://teestheday.com/wp-content/uploads/2024/03/Jujutsu-Kaisen-Hoodie-Anime-5-400x560.jpg",
        "https://www.redwolf.in/image/cache/catalog/hoodies/jujutsu-kaisen-ill-murder-you-hoodie-india-back-600x800.jpg?m=1703305152",
      ],
    },
    {
      item_name: "Spider Themed Jeans",
      item_price_base_currency: "$25",
      item_price_converted_currency: "ZWG500",
      item_category: "menswear, pants",
      images: [
        "https://cdn.mall.adeptmind.ai/https%3A%2F%2Fscene7.zumiez.com%2Fis%2Fimage%2Fzumiez%2Fproduct_main_medium_2x%2FSalem7-Spider-Web-Black-Denim-Jeans-_376221-front-US.jpg_large.webp",
        "https://cdn.mall.adeptmind.ai/https%3A%2F%2Fscene7.zumiez.com%2Fis%2Fimage%2Fzumiez%2Fproduct_main_medium_2x%2FSalem7-Spider-Web-Black-Denim-Jeans-_376221-back-US.jpg_large.webp",
      ],
    },
    {
      item_name: "Customized All Stars",
      item_price_base_currency: "$20",
      item_price_converted_currency: "ZWG400",
      item_category: "bisexual, footwear",
      images: [
        "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_960_720.jpg",
      ],
    },
    {
      item_name: "Attack on Titan Joggers",
      item_price_base_currency: "$8",
      item_price_converted_currency: "ZWG160",
      item_category: "bi-sexual, pants, winter",
      images: [
        "https://everythinganimee.com/cdn/shop/products/Se0e6f84cf6d3416a894e3ca0cc652cf6T.jpg?v=1676352846&width=460",
        "https://everythinganimee.com/cdn/shop/products/S13cdf73396744ea8a6457e207bb87241f.jpg?v=1676352851&width=460",
        "https://everythinganimee.com/cdn/shop/products/S2dd108d440da4ceb8f8ecdc1fd726467V.jpg?v=1676352854&width=1214",
      ],
    },
    {
      item_name: "DeadPool Themed Air Force",
      item_price_base_currency: "$40",
      item_price_converted_currency: "ZWG800",
      item_category: "bisexual, footwear",
      images: [
        "https://cdn.ballwool.com/products/l/156223_83fc37979d5924646737fae7e8b9bc80a5b19734998d4f90c69e855fdb37685576a4a30910fa1e19565f62e0d18eb5991dcd015323e8c5721622bd1c48523c64.webp",
        "https://cdn.ballwool.com/products/1080_1440/156223_d192a42871ba5053e2da6ec5a6b927e6ee00151329438f0819d224c96eee790f3acf4bdc58ee353dfe60d4c9e6ade2c54bda6bad1a21de4d27673b9df665adbe.webp",
      ],
    },
    {
      item_name: "Customized Air Force 1's",
      item_price_base_currency: "$35",
      item_price_converted_currency: "ZWG700",
      item_category: "bisexual, footwear",
      images: [
        "https://shecustomize.com/cdn/shop/files/blue-flowers-air-force-1s-custom-shoes-sneakers-shecustomize-2.jpg?v=1682440691&width=1000",
        "https://shecustomize.com/cdn/shop/files/blue-flowers-air-force-1s-custom-shoes-sneakers-shecustomize-3.jpg?v=1682440696&width=5000",
      ],
    },
    {
      item_name: "Deadpool and wolverine sweater",
      item_price_base_currency: "$12",
      item_price_converted_currency: "ZWG240",
      item_category: "bisexual, footwear",
      images: [
        "https://i.etsystatic.com/40245757/r/il/63854c/6103866784/il_fullxfull.6103866784_88uz.jpg",
        "https://cdn.media.amplience.net/s/hottopic/32598223_hi",
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-start justify-start gap-5">
        <SearchInput />
        <Button
          color="gray"
          className="rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          {!showFilters && <MdFilterAlt size={18} />}
          {showFilters && <MdFilterAltOff size={18} />}
          Filters
        </Button>
        {showFilters && <FilterComponent />}
      </div>

      <div className="mt-5 flex w-full items-start justify-start gap-5">
        <div className="w-3/4">
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {designs &&
              designs.map((design, index) => (
                <Designs
                  key={index}
                  item_name={design.item_name}
                  item_images={design.images}
                  item_price_base_currency={design.item_price_base_currency}
                  item_price_converted_currency={
                    design.item_price_converted_currency
                  }
                  item_category={design.item_category}
                />
              ))}
          </div>
        </div>
        <div className="w-1/4">
          {!orderedItem && <InformationList information={informationContent} />}
          {orderedItem && (
            <Card
              className="max-w-sm shadow-sm shadow-blue-500 dark:shadow-emerald-500"
              renderImage={() => (
                <Tooltip content="view design">
                  <a href="/trips/dashboard">
                    {" "}
                    <img
                      width={500}
                      height={500}
                      src="/images/inspirations3.jpg"
                      alt="inspiration 3"
                    />{" "}
                  </a>
                </Tooltip>
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                RE23401230
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="text-green-300">First Creation</span> Has been
                received by our team, and is looking amazing!
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="text-green-300">+263 773 270 686 </span> Is the
                number to call about any inquires or concerns concerning your
                order. They must have reached out to you by now!
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Your order will be ready for collection or delivery in
                approximately <span className="text-green-300">3</span> days.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
