"use client";

import { PrismicImage, PrismicRichText } from "@prismicio/react";
import CustomDatePicker from "./CustomDatePicker";

function SummaryTourPage({ primary }: any) {
  const { image_tour } = primary;

  const scrollToItinerary = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const itinerarySection = document.getElementById("day-by-day-itinerary");
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-[30rem]">
      <div className="relative w-full h-full">
        <PrismicImage
          field={image_tour}
          className="object-cover w-full h-full"
          fallbackAlt=""
          imgixParams={{ fit: "crop", ar: "1:1" }}
        />
      </div>
      <div className="px-4 md:px-8 lg:px-12 py-6 md:py-10 flex flex-col gap-2">
        <div className="mb-4 flex items-center space-x-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <span className="font-semibold">Trip Year</span>
            </div>
            <CustomDatePicker date={primary.trip_year} />
          </div>
        </div>
        <h2 className="text-xl md:text-3xl font-bold mb-4 font-serif text-[#414141]">
          {primary.title}
        </h2>
        <div className="mb-4 text-lg md:text-md font-sans">
          <PrismicRichText field={primary.description} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl">
          <div className="mb-4 space-y-2">
            <div className="flex items-center space-x-2">
              <LuggageIcon className="h-5 w-5" />
              <span className="font-semibold text-lg">Travel</span>
            </div>
            <p className="text-sm">{primary.travel}</p>
          </div>
          <div className="mb-4 space-y-2">
            <div className="flex items-center space-x-2">
              <MenuIcon className="h-5 w-5" />
              <span className="font-semibold">Meals</span>
            </div>
            <p className="text-sm">{primary.meals}</p>
          </div>
          <div className="mb-4 space-y-2">
            <div className="flex items-center space-x-2">
              <HotelIcon className="h-5 w-5" />
              <span className="font-semibold">Accommodation</span>
            </div>
            <p className="text-sm">{primary.accommodation}</p>
          </div>
          <div className="mb-4 space-y-2">
            <div className="flex items-center space-x-2">
              <WaypointsIcon className="h-5 w-5" />
              <span className="font-semibold">Itinerary</span>
            </div>
            <a
              onClick={scrollToItinerary}
              className="text-gray-500 hover:underline text-sm font-semibold"
            >
              View day-by-day trip itinerary
            </a>
          </div>
        </div>

        <div className="p-6 border rounded-md mb-4 space-y-2">
          <p className="text-xl font-bold  font-serif">
            Looking to book in a group of 15 or more?
          </p>
          <p className="font-sans text-md md:text-md text-muted-foreground">
            Deals, savings and exclusive private touring options available plus
            if you need a different date or itinerary change we can create a
            custom trip. Contact us for more details
          </p>
        </div>
        <p className="text-sm font-sans">
          <b>Trip code:</b> {primary.trip_code}
        </p>
      </div>
    </div>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function HotelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  );
}

function LuggageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function WaypointsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="m10.2 6.3-3.9 3.9" />
      <circle cx="4.5" cy="12" r="2.5" />
      <path d="M7 12h10" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="m13.8 17.7 3.9-3.9" />
      <circle cx="12" cy="19.5" r="2.5" />
    </svg>
  );
}

export default SummaryTourPage;
