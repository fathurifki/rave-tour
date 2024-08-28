import FaqComponent from "@/components/Faq";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FrequentlyAskedQuestions`.
 */
export type FrequentlyAskedQuestionsProps =
  SliceComponentProps<Content.FrequentlyAskedQuestionsSlice>;

/**
 * Component for "FrequentlyAskedQuestions" Slices.
 */
const FrequentlyAskedQuestions = ({
  slice,
}: FrequentlyAskedQuestionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-2 mb-20"
    >
      <FaqComponent primary={slice.primary}/>
    </section>
  );
};

export default FrequentlyAskedQuestions;
