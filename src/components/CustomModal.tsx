import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
interface OptionalExperienceModalProps {
  title: string;
  imageUrl: any;
  experienceInfo: string;
  price: number;
  bookingInfo: string;
}

export default function CustomModal({
  title,
  imageUrl,
  experienceInfo,
  price,
  bookingInfo,
}: OptionalExperienceModalProps) {

  const formattedPrice = price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="font-sans text-[8px] font-semibold hover:underline text-[#414141] mb-2 cursor-pointer">
          See More
        </a>
      </DialogTrigger>
      <DialogContent className="text-[#414141] sm:max-w-5xl max-h-[90vh] overflow-y-auto font-serif">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Optional Experiences
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 px-20 space-y-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <PrismicImage field={imageUrl} style={{ borderRadius: "10px" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Experience Info</h3>
              <PrismicRichText field={experienceInfo} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Pricing Info</h3>
              <div className="flex flex-col  mb-2 font-sans">
                <span className="text-xs font-semibold">Adults</span>
                <span className="text-2xl font-semibold">{formattedPrice}</span>
              </div>
              <h4 className="text-2xl font-semibold mb-2">How to Book?</h4>
              <p className=" font-sans">{bookingInfo}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
