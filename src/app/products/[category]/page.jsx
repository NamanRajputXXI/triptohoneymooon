import Link from "next/link"; // Using relative import

export const getProductsData = async ({ params }) => {
  try {
    const response = await fetch(
      `http://localhost:3002/api/${params.category}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not in JSON format");
    }

    const { data = [] } = (await response.json()) ?? {};
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Page = async ({ params }) => {
  const data = await getProductsData({ params });
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto my-20 px-5 flex flex-col gap-10">
        <div className="grid lg:grid-cols-4 justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          {data.map((destination, index) => (
            <div key={index}>
              <Link href={`/products/${params.category}/${destination._id}`}>
                {destination.heading}
                <img
                  className="h-40 w-40 object-cover object-center"
                  src={destination.imageUrl}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
