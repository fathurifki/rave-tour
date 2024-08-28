import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { Check, CheckCircle, CircleHelp } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import CustomModal from "./CustomModal";

interface Experience {
  image_experience: any;
  type: string;
  day: number;
  special_request: string | null;
  description: string;
  title: string;
  color_tag: string;
  is_additional: boolean;
  additional_price: number;
}

export default function ExperienceCard({ ...props }: Experience) {
  return (
    <Card className="max-w-[24rem] overflow-hidden  min-h-[26rem] flex flex-col">
      <div className="relative">
        <PrismicImage
          field={props.image_experience}
          className="w-full h-48 object-cover"
          imgixParams={{ w: 400, h: 1200, fit: "fill" }}
        />
        {props.type && (
          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-md text-sm font-semibold ${
              props.type.toLowerCase() === "iconic"
                ? "text-white"
                : "text-gray-800"
            }`}
            style={{ backgroundColor: props.color_tag }}
          >
            {props.type} Experience
          </div>
        )}
        {props.special_request && (
          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-md text-sm font-semibold text-white`}
            style={{ backgroundColor: props.color_tag }}
          >
            {props.special_request}
          </div>
        )}
      </div>
      <CardTitle className="px-6 py-4 text-lg font-bold font-serif text-[#414141]">
        {props.title}
      </CardTitle>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="text-sm text-gray-600 mb-4 overflow-hidden font-sans leading-[180%] font-normal text-[12px] tracking-[-0.1px]">
          {typeof props.description === "string" ? (
            <p className="line-clamp-5">{props.description}</p>
          ) : (
            <PrismicRichText
              field={props.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="line-clamp-3">{children}</p>
                ),
              }}
            />
          )}
          {props.is_additional && (
            <CustomModal
              title={props.title}
              imageUrl={props.image_experience}
              experienceInfo={props.description}
              price={props.additional_price}
              bookingInfo="Optional Experiences are enhancements to your tour and can be booked through your Travel Director while on tour."
            />
          )}
        </div>

        {(props.type === "Iconic" || props.special_request) && (
          <div className="flex space-x-3 items-center text-[#414141] font-sans">
            <Check className="w-6 h-6 mr-2" />
            <span className="text-sm font-semibold">Included With Trip</span>
          </div>
        )}
        {props.type === "Optional" && (
          <div className="flex justify-between items-center text-[#414141] font-sans">
            <span className="text-sm font-semibold">
              Additional Cost Applies
            </span>
            <CustomTooltip
              title="Optional Experiences"
              content="Optional Experiences are enhancements to your tour"
              side="bottom"
            >
              <CircleHelp className="w-6 h-6 mr-2" />
            </CustomTooltip>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
