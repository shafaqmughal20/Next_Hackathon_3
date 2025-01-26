import Footer from "@/app/Footer/Footer";
import { sanityFetch } from "@/sanity/lib/live";
import { foodQuery, chefQuery } from "@/sanity/lib/queries";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import Nav2 from "@/components/Nav2";
// Create an image URL builder instance
const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nhvsmkfb",
  dataset: "production",
});

function urlFor(source: any) {
  return builder.image(source);
}

// Define Product and Chef types
type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
};

type Chef = {
  _id: string;
  name: string;
  position: string;
  experience: string;
  speciality: string;
  image: string;
  description: string;
  available: boolean;
};

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Fetch products and chefs
  const productResponse = await sanityFetch({ query: foodQuery });
  const products: Product[] = productResponse.data;

  const chefResponse = await sanityFetch({ query: chefQuery });
  const chefs: Chef[] = chefResponse.data;

  // Find the product or chef by ID
  const product = products.find((item) => item._id === id);
  const chef = chefs.find((item) => item._id === id);

  if (!product && !chef) {
    notFound();
  }

  const item = product || chef;


  return (
    <div className="p-6 bg-black min-h-screen">
      <div className="mb-14">
        <Nav2 />
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
        <img
          src={item?.image ? urlFor(item.image).url() : "/placeholder.jpg"} // Fallback image
          alt={item?.name || "Unnamed Item"}
          className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{item?.name || "Unnamed Item"}</h1>

          {/* Product-specific content */}
          {product && (
            <>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{product.description}</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                <span className="text-lg line-through text-gray-400">${product.originalPrice.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.available
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.available ? "Available" : "Out of Stock"}
                </span>
                <span className="text-sm text-gray-500">Tags: {product.tags.join(", ")}</span>
              </div>
            </>
          )}

          {/* Chef-specific content */}
          {chef && (
            <>
              <p className="text-gray-600 text-sm mb-2">{chef.position}</p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{chef.description}</p>
              <p className="text-gray-800 text-base mb-4">
                <strong>Speciality:</strong> {chef.speciality}
              </p>
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    chef.available
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {chef.available ? "Available" : "Not Available"}
                </span>
                <div>
                  <button>
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}


