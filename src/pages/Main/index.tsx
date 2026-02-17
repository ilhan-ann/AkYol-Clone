import ProductCard from "../../components/ProductCard";
import Category from "../../components/Category";
import Banner from "./components/Banner";
import BottomBanner from "./components/BottomBanner";
import categoryProducts from "../../data/categoryWithProduct.json";
import { useTranslation } from "react-i18next";
import { Acer_nitro, Xiaomi_teapot, Yesido_charger, Yesido_speaker } from "../../assets/images";
import SideBarServices from "./components/SideBarServices";

const shuffleArray = <T,>(array: T[]): T[] =>
  array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

function Main() {
  const { t } = useTranslation();
  const allProducts = categoryProducts.flatMap(cat => cat.products);
  const newest = allProducts.filter(p => p.isNew);
  const hotSale = allProducts.filter(p => !p.isNew && p.discount > 0);
  const recommend = shuffleArray(allProducts.filter(p => !p.isNew && p.discount === 0));

  return (
    <div className="container mx-auto px-12 mt-4">
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 md:col-span-3">
          <div className="bg-custom-blue w-full p-3 text-center text-white">
            {t("catalog")}
          </div>
          <Category />
          <div className="my-8">
            <img src={Xiaomi_teapot} alt="Xiaomi_teapot" />
          </div>
          <SideBarServices />
          <div className="my-8">
            <img src={Yesido_speaker} alt="Xiaomi_teapot" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Banner />
          {newest.length > 0 && (
            <div className="my-3">
              <h2 className="text-3xl font-bold mb-3">{t("newest")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {newest.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}
          <img src={Acer_nitro} alt="Acer_nitro" />
          {hotSale.length > 0 && (
            <div className="my-3">
              <h2 className="text-3xl font-bold mb-3">{t("hot_sale")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {hotSale.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}
          <img src={Yesido_charger} alt="Yesido_charger" />
          {recommend.length > 0 && (
            <div className="my-3">
              <h2 className="text-3xl font-bold mb-3">{t("recommend")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {recommend.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}
          <div className="text-3xl font-bold mb-6">
            Welcome to Ak Yol!
            <div className="text-lg font-semibold mt-3">
              The AkYol online store offers a wide range of products from over two hundred categories and 10,000 items. We are a leading company specializing in the sale of computer technology and electronics with <span className="text-green-600">free delivery throughout Turkmenistan.</span>
            </div>
            <div className="text-lg font-semibold my-5">
              One of the key advantages of our company is our long-standing presence in the market - we have been operating successfully for over 10 years. During this time, we have gained the trust and recognition of our customers through the reliability, quality, and professionalism of our work.
            </div>
            <div className="text-lg font-semibold">
              We also provide a full range of services, including <span className="text-green-600">warranty service and a service center</span>. Our team of experienced specialists is always ready to assist you with any questions related to your purchase. We strive to provide a high level of service and meet the needs of every customer.
            </div>
          </div>
          <BottomBanner />
        </div>
      </div>
    </div>
  );
}

export default Main;
