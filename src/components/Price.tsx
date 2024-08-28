import { Star, Tags } from "lucide-react";

interface Price {
  tour_name: string | null;
  rating: number | 0;
  review_count: number | null;
  is_popular: boolean | null;
  ori_price: number | null;
  disc_price: number | null;
}

interface SliceProps {
  primary: Price;
}

function PriceDetailComponent({ primary }: SliceProps) {
  const {
    tour_name = "",
    rating = 0,
    review_count = 0,
    is_popular = false,
    ori_price = 0,
    disc_price = 0,
  } = primary;

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  };

  const discountedPrice = (value, discValue) => {
    const discountPrice = (value * discValue) / 100;
    const final = value - discountPrice;
    return {
      final,
      discountPrice,
    };
  };

  return (
    <div className="w-full  p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                const isHalfStar = rating - index > 0 && rating - index < 1;
                return (
                  <div key={index} className="relative inline-block">
                    <Star
                      className={`w-5 h-5 ${
                        starValue <= rating
                          ? "text-yellow-500 fill-current"
                          : "text-yellow-500"
                      }`}
                    />
                    {isHalfStar && (
                      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <span className="text-lg font-semibold">{rating}</span>
            <a href="#" className="ml-2 text-[2px] text-muted-foreground">
              {review_count} reviews
            </a>
            {is_popular && (
              <div
                className="bg-red-600 text-white inline-flex w-fit items-center whitespace-nowrap rounded-md border px-2.5 py-1 text-xs font-semibold ml-2"
                data-v0-t="badge"
              >
                Popular
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold">{tour_name}</h1>
        </div>
        <div className="flex mt-4 space-x-8 space-y-4 md:mt-0 ">
          <div className="text-right">
            <p className="text-muted-foreground">Today&apos;s Deal</p>
            <p className="text-3xl font-bold text-primary">
              From{" "}
              {formatCurrency(
                discountedPrice(ori_price ?? 0, disc_price ?? 0).final
              )}
            </p>
            <div className="flex items-center gap-2">
              <p className="line-through text-gray-400 text-md">
                Was {formatCurrency(ori_price ?? 0)}
              </p>
              <div className="bg-red-600 text-white inline-flex w-fit items-center whitespace-nowrap rounded-md border px-2 text-xs font-semibold gap-2 p-1">
                <Tags />
                Save up to{" "}
                {formatCurrency(
                  discountedPrice(ori_price ?? 0, disc_price ?? 0).discountPrice
                )}
              </div>
            </div>
            <div className="flex h-[2.5rem] items-end justify-end font-semibold">
              <span>Find this price</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-red-500 w-[12.125rem] h-[3.25rem] text-white flex items-center justify-center font-bold">
              Available Dates
            </div>
            <button className=" w-[12.125rem] h-[3.25rem] inline-flex items-center justify-center whitespace-nowrap text-sm border-2 font-bold text-red-500 border-red-600 px-4 py-2 ">
              Easy Quote
            </button>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-end -md w-full">
        <div className="flex max-w-[46rem] p-2 bg-muted items-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-6 h-6 text-muted-foreground mr-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <p className="text-sm">
            To enquire in local currency, call or click on Easy Quote button and
            add your currency preference in the Additional Information box.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceDetailComponent;
