import Layout from "@/components/layout/layout";
import SummaryTourPage from "@/components/SummaryTour";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SummaryTour`.
 */
export type SummaryTourProps = SliceComponentProps<Content.SummaryTourSlice>;

/**
 * Component for "SummaryTour" Slices.
 */
const SummaryTour = ({ slice }: SummaryTourProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SummaryTourPage primary={slice.primary} />
    </section>
  );
};

export default SummaryTour;
