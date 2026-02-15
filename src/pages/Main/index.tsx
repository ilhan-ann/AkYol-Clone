import ProductCard from "../../components/ProductCard";
import Category from "../../components/Category/Category";
import Banner from "./components/Banner";
import categoryProducts from "../../data/categoryWithProduct.json";
import { useTranslation } from "react-i18next";

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
          <Category />
        </div>
        <div className="col-span-12 md:col-span-9">
          <Banner />
          {newest.length > 0 && (
            <div className="my-6">
              <h2 className="text-3xl font-bold mb-4">{t("newest")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {newest.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}
          {hotSale.length > 0 && (
            <div className="my-6">
              <h2 className="text-3xl font-bold  mb-4">{t("hot_sale")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {hotSale.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}
          {recommend.length > 0 && (
            <div className="my-6">
              <h2 className="text-3xl font-bold mb-4">{t("recommend")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {recommend.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default Main;
