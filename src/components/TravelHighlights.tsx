import { PrismicRichText } from "@prismicio/react";
import { Check } from "lucide-react";

export default function TravelHighlightComponent({
  primary,
}: {
  primary: any;
}) {
  const { travel_highlights } = primary;
  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunkedSightseeing = chunkArray(travel_highlights, 6);

  return (
    <div className="flex border-t border-gray-200 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-x-10">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-[#A7282E] mb-4">
            Travel highlights
          </h2>
          <span className="text-md text-[#6B6B6B]">
            Specific transfer information can be found here:
          </span>
          <div className="mt-4 bg-[#A7282E] w-[12.125rem] h-[3.25rem] text-white flex items-center justify-center font-bold">
            Available Dates
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {chunkedSightseeing.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-12">
              {chunk.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-10 h-10 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <PrismicRichText
                      field={highlight.travel_highlights_detail}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-gray-700">
                            <span>{children[0]} </span>
                            {children.slice(1)}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
