import { PrismicRichText } from "@prismicio/react";
import { MapPin } from "lucide-react";

export default function SightseeingComponent({
  primary,
}: {
  primary: { sightseeing: any[] };
}) {
  const { sightseeing } = primary;

  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunkedSightseeing = chunkArray(sightseeing, 4);

  return (
    <div>
      <span className="text-3xl  text-[#414141] font-bold font-serif">About this trip</span>
      <div className="flex py-2 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-x-10">
          <div className="md:col-span-1">
            <h2 className="text-[24px] font-bold text-[#4B6B35] font-serif">
              Sightseeing highlights
            </h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
            {chunkedSightseeing.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-12">
                {chunk.map((highlight: any, index: any) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="w-10 h-10 text-[#4B6B35] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <PrismicRichText
                        field={highlight.sightseeing_detail}
                        components={{
                          paragraph: ({ children }: any) => (
                            <p className="text-gray-700">
                              <span className="font-semibold">
                                {children[0]}{" "}
                              </span>
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
    </div>
  );
}
