import IternaryDayComponent from "@/components/IternaryDay";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DayByDayIternary`.
 */
export type DayByDayIternaryProps =
  SliceComponentProps<Content.DayByDayIternarySlice>;

/**
 * Component for "DayByDayIternary" Slices.
 */
const DayByDayIternary = ({ slice }: DayByDayIternaryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10"
    >
      <div id="day-by-day-itinerary">
        <IternaryDayComponent primary={slice.primary} />
      </div>
    </section>
  );
};

export default DayByDayIternary;
