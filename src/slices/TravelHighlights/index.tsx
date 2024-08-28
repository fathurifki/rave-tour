import TravelHighlightComponent from "@/components/TravelHighlights";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TravelHighlights`.
 */
export type TravelHighlightsProps =
  SliceComponentProps<Content.TravelHighlightsSlice>;

/**
 * Component for "TravelHighlights" Slices.
 */
const TravelHighlights = ({ slice }: TravelHighlightsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10 mb-20"
    >
      <TravelHighlightComponent primary={slice.primary} />
    </section>
  );
};

export default TravelHighlights;
