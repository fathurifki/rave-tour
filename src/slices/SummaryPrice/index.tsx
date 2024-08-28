import PriceDetailComponent from "@/components/Price";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SummaryPrice`.
 */
export type SummaryPriceProps = SliceComponentProps<Content.SummaryPriceSlice>;

/**
 * Component for "SummaryPrice" Slices.
 */
const SummaryPrice = ({ slice }: SummaryPriceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* <PriceDetailComponent primary={slice?.primary} /> */}
    </section>
  );
};

export default SummaryPrice;
