import SightseeingComponent from "@/components/SightSeeing";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SightseeingHighlights`.
 */
export type SightseeingHighlightsProps =
  SliceComponentProps<Content.SightseeingHighlightsSlice>;

/**
 * Component for "SightseeingHighlights" Slices.
 */
const SightseeingHighlights = ({
  slice,
}: SightseeingHighlightsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10 mb-20"
    >

      <SightseeingComponent primary={slice.primary} />
    </section>
  );
};

export default SightseeingHighlights;
