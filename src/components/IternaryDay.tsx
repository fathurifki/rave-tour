"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  PlaneLanding,
  Users,
  Home,
  Utensils,
  MoveRight,
  PlaneTakeoff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ExperienceCard from "./ExperienceCard";

interface DayDetail {
  day: number;
  title: string;
  image_day_detail: any;
  destination: string;
  description: string[];
  arrival: string;
  welcome: string;
  accommodation: string;
  included_meals: string;
  is_arrival: boolean;
  is_departure: boolean;
  is_welcome: boolean;
  is_special_request: boolean;
  color_special_request: string;
  special_request: string;
}

interface Experience {
  image_experience: any;
  type: string;
  day: number;
  special_request: string | null;
  description: string;
  title: string;
  color_tag: string;
}

interface IternaryDayComponentProps {
  primary: {
    day_details: DayDetail[];
    experiences: Experience[];
  };
}

function IternaryDayComponent({ primary }: IternaryDayComponentProps) {
  const [openDays, setOpenDays] = useState<string[]>([]);
  const { day_details, experiences } = primary;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const toggleCard = (day: string) => {
    setOpenDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleExpandAll = () => {
    const allDays = day_details.map((item) => `day-${item.day}`);
    setOpenDays((prev) => (prev.length === allDays.length ? [] : allDays));
  };

  return (
    <div className="">
      <h3 className="text-2xl font-bold">Day by Day Itinerary</h3>
      <div className="flex justify-end mb-4">
        <div
          className="cursor-pointer flex items-center text-md font-semibold"
          onClick={toggleExpandAll}
        >
          {openDays.length === day_details.length
            ? "Collapse All Days"
            : "Expand All Days"}
          <ChevronDown
            className={`ml-2 w-8 h-8 transition-transform ${openDays.length === day_details.length ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      {day_details.map((item) => (
        <Card key={item.day} className="mb-4">
          <CardContent className="p-0">
            <div
              className="cursor-pointer"
              onClick={() => toggleCard(`day-${item.day}`)}
            >
              <div className={`flex w-full`}>
                <div
                  className={`flex w-full h-[7.5rem] gap-4 ${openDays.includes(`day-${item.day}`) ? "p-4" : ""}`}
                >
                  {!openDays.includes(`day-${item.day}`) && (
                    <PrismicImage
                      field={item.image_day_detail}
                      className={`w-[18rem]  rounded-l-md object-cover transition-opacity duration-700 ease-in-out ${openDays.includes(`day-${item.day}`) ? "opacity-0" : "opacity-100"}`}
                      imgixParams={{ fit: "crop", ar: "1:1" }}
                    />
                  )}
                  <div
                    className={`flex justify-between w-full  ${openDays.includes(`day-${item.day}`) ? "" : "pr-6"}`}
                  >
                    <div
                      className={`text-left ${openDays.includes(`day-${item.day}`) ? "flex flex-col justify-center pl-[12px]" : "px-4 py-4 "}`}
                    >
                      <h2 className="text-lg font-semibold text-gray-500">
                        Day {item.day}
                        {item.is_special_request && (
                          <span
                            className="text-xs text-white px-2 py-1 rounded-md ml-2"
                            style={{
                              backgroundColor: item.color_special_request,
                            }}
                          >
                            {item.special_request}
                          </span>
                        )}
                      </h2>
                      <div className="flex gap-4 items-center mt-2">
                        <p className="text-lg font-bold ">{item.title}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          {item.destination
                            .split(",")
                            .map((dest, index, array) => (
                              <Fragment key={index}>
                                <span>{dest.trim()}</span>
                                {index < array.length - 1 && (
                                  <MoveRight className="w-3 h-3 mx-1" />
                                )}
                              </Fragment>
                            ))}
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        {item.is_arrival && (
                          <span className="text-lg flex gap-2 items-center">
                            <PlaneLanding className="w-4 h-4" /> Arrival
                            Transfer
                          </span>
                        )}

                        {item.is_welcome && (
                          <div className="flex gap-2 items-center">
                            <Users className="w-4 h-4" /> Welcome
                          </div>
                        )}
                        {item.is_departure && (
                          <div className="flex gap-2 items-center">
                            <PlaneTakeoff className="w-4 h-4" /> Departure
                            Transfer
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-gray-500">
                        See{" "}
                        {openDays.includes(`day-${item.day}`) ? "less" : "more"}
                      </span>
                      <ChevronDown
                        className={`ml-2 w-8 h-8 transition-transform ${
                          openDays.includes(`day-${item.day}`)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openDays.includes(`day-${item.day}`)
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {openDays.includes(`day-${item.day}`) && (
                <div className="border-t p-4 mb-4 transition-all duration-500 ease-in-out">
                  <div className="flex flex-col px-8 py-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-500">
                      Day {item.day}
                    </h4>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <div className="flex flex-col lg:flex-row lg:space-x-8">
                      <div className="lg:w-full space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                          <div className="col-span-1 space-y-4">
                            <PrismicRichText field={item.description} />
                            <ul className="space-y-8">
                              {item.is_arrival && (
                                <li className="flex items-center space-x-2">
                                  <PlaneLanding className="w-6 h-6" />
                                  <div>
                                    <strong>Arrival Transfer</strong>{" "}
                                    {item.arrival}
                                  </div>
                                </li>
                              )}
                              {item.is_departure && (
                                <li className="flex items-center space-x-2">
                                  <PlaneTakeoff className="w-6 h-6" />
                                  <div>
                                    <strong>Departure Transfer</strong>{" "}
                                    {item.arrival}
                                  </div>
                                </li>
                              )}
                              {item.welcome && (
                                <li className="flex items-center space-x-2">
                                  <Users className="w-6 h-6" />
                                  <div>
                                    <strong>Welcome</strong> {item.welcome}
                                  </div>
                                </li>
                              )}
                              {item.accommodation && (
                                <li className="flex items-start space-x-2">
                                  <Home className="w-6 h-6" />
                                  <div>
                                    <strong>Accommodation</strong>{" "}
                                    {item.accommodation}
                                  </div>
                                </li>
                              )}
                              {item.included_meals && (
                                <li className="flex items-start space-x-2">
                                  <Utensils className="w-6 h-6" />
                                  <div>
                                    <strong>Included Meals</strong>{" "}
                                    {item.included_meals}
                                  </div>
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="col-span-1 relative -top-[4rem]">
                            <PrismicImage
                              field={item.image_day_detail}
                              className={`w-full h-full rounded-md object-cover transition-opacity duration-700 ease-in-out ${openDays.includes(`day-${item.day}`) ? "opacity-100" : "opacity-0"}`}
                              imgixParams={{ fit: "crop", ar: "16:9" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold mb-4">
                        Included and optional experiences
                      </h3>
                      {experiences &&
                        experiences.filter((exp) => exp.day === item.day)
                          .length > 3 && (
                          <div className="flex items-center space-x-8">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full w-10 h-10 bg-white hover:bg-gray-100"
                              onClick={() => scroll("left")}
                              aria-label="Previous"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full w-10 h-10 bg-white hover:bg-gray-100"
                              onClick={() => scroll("right")}
                              aria-label="Next"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                    </div>

                    <div className="overflow-x-hidden" ref={scrollContainerRef}>
                      <div className="flex space-x-10 pb-4">
                        {experiences
                          .filter((experience) => item.day === experience.day)
                          .map((experience) => (
                            <div
                              key={`${experience.day}-${experience.title}`}
                              className="flex-none flex"
                            >
                              <div className="flex flex-col w-full">
                                <ExperienceCard {...experience} />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default IternaryDayComponent;
