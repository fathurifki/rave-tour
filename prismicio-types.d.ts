// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HeaderDocumentDataSlicesSlice = never;

/**
 * Content for header documents
 */
interface HeaderDocumentData {
  /**
   * header_image field in *header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.header_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  header_image: prismic.ImageField<never>;

  /**
   * cta_1 field in *header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_1: prismic.LinkField;

  /**
   *  cta_2 field in *header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_2: prismic.LinkField;

  /**
   * cta_3 field in *header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_3: prismic.LinkField;

  /**
   * contact_phone field in *header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.contact_phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_phone: prismic.KeyTextField;

  /**
   * contact_wa field in *header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.contact_wa
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_wa: prismic.KeyTextField;

  /**
   * Slice Zone field in *header*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeaderDocumentDataSlicesSlice> /**
   * Meta Title field in *header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: header.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: header.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type SummaryPriceDocumentDataSlicesSlice = SummaryPriceSlice;

/**
 * Content for summary_price documents
 */
interface SummaryPriceDocumentData {
  /**
   * Slice Zone field in *summary_price*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_price.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SummaryPriceDocumentDataSlicesSlice>;
}

/**
 * summary_price document from Prismic
 *
 * - **API ID**: `summary_price`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SummaryPriceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SummaryPriceDocumentData>,
    "summary_price",
    Lang
  >;

type TourDetailIdDocumentDataSlicesSlice =
  | TravelHighlightsSlice
  | SummaryTourSlice
  | SightseeingHighlightsSlice
  | FrequentlyAskedQuestionsSlice
  | DayByDayIternarySlice
  | SummaryPriceSlice;

/**
 * Content for Tour Detail documents
 */
interface TourDetailIdDocumentData {
  /**
   * Slice Zone field in *Tour Detail*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: tour_detail_id.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TourDetailIdDocumentDataSlicesSlice> /**
   * Meta Title field in *Tour Detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: tour_detail_id.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Tour Detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: tour_detail_id.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Tour Detail*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tour_detail_id.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Tour Detail document from Prismic
 *
 * - **API ID**: `tour_detail_id`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TourDetailIdDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TourDetailIdDocumentData>,
    "tour_detail_id",
    Lang
  >;

export type AllDocumentTypes =
  | HeaderDocument
  | SummaryPriceDocument
  | TourDetailIdDocument;

/**
 * Item in *DayByDayIternary → Default → Primary → day_details*
 */
export interface DayByDayIternarySliceDefaultPrimaryDayDetailsItem {
  /**
   * day field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].day
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  day: prismic.NumberField;

  /**
   * title field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image_day_detail field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].image_day_detail
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_day_detail: prismic.ImageField<never>;

  /**
   * destination field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].destination
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  destination: prismic.KeyTextField;

  /**
   * description field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * arrival field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].arrival
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  arrival: prismic.KeyTextField;

  /**
   * welcome field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].welcome
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  welcome: prismic.KeyTextField;

  /**
   * accommodation field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].accommodation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  accommodation: prismic.KeyTextField;

  /**
   * included_meals field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].included_meals
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  included_meals: prismic.KeyTextField;

  /**
   * is_arrival field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].is_arrival
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_arrival: prismic.BooleanField;

  /**
   * is_departure field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].is_departure
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_departure: prismic.BooleanField;

  /**
   * is_welcome field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].is_welcome
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_welcome: prismic.BooleanField;

  /**
   * is_special_request field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].is_special_request
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_special_request: prismic.BooleanField;

  /**
   * Color special request field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].color_special_request
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color_special_request: prismic.ColorField;

  /**
   * special_request field in *DayByDayIternary → Default → Primary → day_details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[].special_request
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  special_request: prismic.KeyTextField;
}

/**
 * Item in *DayByDayIternary → Default → Primary → experiences*
 */
export interface DayByDayIternarySliceDefaultPrimaryExperiencesItem {
  /**
   * image_experience field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].image_experience
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_experience: prismic.ImageField<never>;

  /**
   * type field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"Iconic" | "Optional">;

  /**
   * day field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].day
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  day: prismic.NumberField;

  /**
   * special_request field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].special_request
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  special_request: prismic.KeyTextField;

  /**
   * title field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   *  Color tag field in *DayByDayIternary → Default → Primary → experiences*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[].color_tag
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color_tag: prismic.ColorField;
}

/**
 * Primary content in *DayByDayIternary → Default → Primary*
 */
export interface DayByDayIternarySliceDefaultPrimary {
  /**
   * day_details field in *DayByDayIternary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.day_details[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  day_details: prismic.GroupField<
    Simplify<DayByDayIternarySliceDefaultPrimaryDayDetailsItem>
  >;

  /**
   * experiences field in *DayByDayIternary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: day_by_day_iternary.default.primary.experiences[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  experiences: prismic.GroupField<
    Simplify<DayByDayIternarySliceDefaultPrimaryExperiencesItem>
  >;
}

/**
 * Default variation for DayByDayIternary Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DayByDayIternarySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DayByDayIternarySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DayByDayIternary*
 */
type DayByDayIternarySliceVariation = DayByDayIternarySliceDefault;

/**
 * DayByDayIternary Shared Slice
 *
 * - **API ID**: `day_by_day_iternary`
 * - **Description**: DayByDayIternary
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DayByDayIternarySlice = prismic.SharedSlice<
  "day_by_day_iternary",
  DayByDayIternarySliceVariation
>;

/**
 * Item in *FrequentlyAskedQuestions → Default → Primary → FAQ*
 */
export interface FrequentlyAskedQuestionsSliceDefaultPrimaryFaqItem {
  /**
   * question field in *FrequentlyAskedQuestions → Default → Primary → FAQ*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.faq[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * answer field in *FrequentlyAskedQuestions → Default → Primary → FAQ*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.faq[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Primary content in *FrequentlyAskedQuestions → Default → Primary*
 */
export interface FrequentlyAskedQuestionsSliceDefaultPrimary {
  /**
   * FAQ field in *FrequentlyAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.faq[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  faq: prismic.GroupField<
    Simplify<FrequentlyAskedQuestionsSliceDefaultPrimaryFaqItem>
  >;
}

/**
 * Default variation for FrequentlyAskedQuestions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrequentlyAskedQuestionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FrequentlyAskedQuestionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FrequentlyAskedQuestions*
 */
type FrequentlyAskedQuestionsSliceVariation =
  FrequentlyAskedQuestionsSliceDefault;

/**
 * FrequentlyAskedQuestions Shared Slice
 *
 * - **API ID**: `frequently_asked_questions`
 * - **Description**: FrequentlyAskedQuestions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrequentlyAskedQuestionsSlice = prismic.SharedSlice<
  "frequently_asked_questions",
  FrequentlyAskedQuestionsSliceVariation
>;

/**
 * Item in *SightseeingHighlights → Default → Primary → Sightseeing*
 */
export interface SightseeingHighlightsSliceDefaultPrimarySightseeingItem {
  /**
   * sightseeing_detail field in *SightseeingHighlights → Default → Primary → Sightseeing*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sightseeing_highlights.default.primary.sightseeing[].sightseeing_detail
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sightseeing_detail: prismic.RichTextField;
}

/**
 * Primary content in *SightseeingHighlights → Default → Primary*
 */
export interface SightseeingHighlightsSliceDefaultPrimary {
  /**
   * Sightseeing field in *SightseeingHighlights → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: sightseeing_highlights.default.primary.sightseeing[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  sightseeing: prismic.GroupField<
    Simplify<SightseeingHighlightsSliceDefaultPrimarySightseeingItem>
  >;
}

/**
 * Default variation for SightseeingHighlights Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SightseeingHighlightsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SightseeingHighlightsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SightseeingHighlights*
 */
type SightseeingHighlightsSliceVariation = SightseeingHighlightsSliceDefault;

/**
 * SightseeingHighlights Shared Slice
 *
 * - **API ID**: `sightseeing_highlights`
 * - **Description**: SightseeingHighlights
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SightseeingHighlightsSlice = prismic.SharedSlice<
  "sightseeing_highlights",
  SightseeingHighlightsSliceVariation
>;

/**
 * Primary content in *SummaryPrice → Default → Primary*
 */
export interface SummaryPriceSliceDefaultPrimary {
  /**
   * Tour Name field in *SummaryPrice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_price.default.primary.tour_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tour_name: prismic.KeyTextField;

  /**
   * Rating field in *SummaryPrice → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_price.default.primary.rating
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  rating: prismic.NumberField;

  /**
   * Review field in *SummaryPrice → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_price.default.primary.review_count
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  review_count: prismic.NumberField;

  /**
   * Is Popular field in *SummaryPrice → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: summary_price.default.primary.is_popular
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_popular: prismic.BooleanField;

  /**
   * Ori Price field in *SummaryPrice → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_price.default.primary.ori_price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  ori_price: prismic.NumberField;

  /**
   * Disc Price field in *SummaryPrice → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_price.default.primary.disc_price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  disc_price: prismic.NumberField;
}

/**
 * Default variation for SummaryPrice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SummaryPriceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SummaryPriceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SummaryPrice*
 */
type SummaryPriceSliceVariation = SummaryPriceSliceDefault;

/**
 * SummaryPrice Shared Slice
 *
 * - **API ID**: `summary_price`
 * - **Description**: SummaryPrice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SummaryPriceSlice = prismic.SharedSlice<
  "summary_price",
  SummaryPriceSliceVariation
>;

/**
 * Item in *SummaryTour → Default → Primary → Trip Year*
 */
export interface SummaryTourSliceDefaultPrimaryTripYearItem {
  /**
   * year field in *SummaryTour → Default → Primary → Trip Year*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.trip_year[].year
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  year: prismic.DateField;
}

/**
 * Primary content in *SummaryTour → Default → Primary*
 */
export interface SummaryTourSliceDefaultPrimary {
  /**
   * Trip Year field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.trip_year[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  trip_year: prismic.GroupField<
    Simplify<SummaryTourSliceDefaultPrimaryTripYearItem>
  >;

  /**
   * image_tour field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.image_tour
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_tour: prismic.ImageField<never>;

  /**
   * title field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * travel field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.travel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  travel: prismic.KeyTextField;

  /**
   * meals field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.meals
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meals: prismic.KeyTextField;

  /**
   * accommodation field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.accommodation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  accommodation: prismic.KeyTextField;

  /**
   * is_low_deposit field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: summary_tour.default.primary.is_low_deposit
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_low_deposit: prismic.BooleanField;

  /**
   * is_free_charge field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: summary_tour.default.primary.is_free_charge
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_free_charge: prismic.BooleanField;

  /**
   * is_deposit_protection field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: summary_tour.default.primary.is_deposit_protection
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_deposit_protection: prismic.BooleanField;

  /**
   * trip_code field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.trip_code
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trip_code: prismic.KeyTextField;

  /**
   * special_request field in *SummaryTour → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_tour.default.primary.special_request
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  special_request: prismic.KeyTextField;
}

/**
 * Default variation for SummaryTour Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SummaryTourSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SummaryTourSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SummaryTour*
 */
type SummaryTourSliceVariation = SummaryTourSliceDefault;

/**
 * SummaryTour Shared Slice
 *
 * - **API ID**: `summary_tour`
 * - **Description**: SummaryTour
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SummaryTourSlice = prismic.SharedSlice<
  "summary_tour",
  SummaryTourSliceVariation
>;

/**
 * Item in *TravelHighlights → Default → Primary → Travel highlights*
 */
export interface TravelHighlightsSliceDefaultPrimaryTravelHighlightsItem {
  /**
   * travel_highlights_detail field in *TravelHighlights → Default → Primary → Travel highlights*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: travel_highlights.default.primary.travel_highlights[].travel_highlights_detail
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  travel_highlights_detail: prismic.RichTextField;
}

/**
 * Primary content in *TravelHighlights → Default → Primary*
 */
export interface TravelHighlightsSliceDefaultPrimary {
  /**
   * Travel highlights field in *TravelHighlights → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: travel_highlights.default.primary.travel_highlights[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  travel_highlights: prismic.GroupField<
    Simplify<TravelHighlightsSliceDefaultPrimaryTravelHighlightsItem>
  >;
}

/**
 * Default variation for TravelHighlights Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TravelHighlightsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TravelHighlightsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TravelHighlights*
 */
type TravelHighlightsSliceVariation = TravelHighlightsSliceDefault;

/**
 * TravelHighlights Shared Slice
 *
 * - **API ID**: `travel_highlights`
 * - **Description**: TravelHighlights
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TravelHighlightsSlice = prismic.SharedSlice<
  "travel_highlights",
  TravelHighlightsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataSlicesSlice,
      SummaryPriceDocument,
      SummaryPriceDocumentData,
      SummaryPriceDocumentDataSlicesSlice,
      TourDetailIdDocument,
      TourDetailIdDocumentData,
      TourDetailIdDocumentDataSlicesSlice,
      AllDocumentTypes,
      DayByDayIternarySlice,
      DayByDayIternarySliceDefaultPrimaryDayDetailsItem,
      DayByDayIternarySliceDefaultPrimaryExperiencesItem,
      DayByDayIternarySliceDefaultPrimary,
      DayByDayIternarySliceVariation,
      DayByDayIternarySliceDefault,
      FrequentlyAskedQuestionsSlice,
      FrequentlyAskedQuestionsSliceDefaultPrimaryFaqItem,
      FrequentlyAskedQuestionsSliceDefaultPrimary,
      FrequentlyAskedQuestionsSliceVariation,
      FrequentlyAskedQuestionsSliceDefault,
      SightseeingHighlightsSlice,
      SightseeingHighlightsSliceDefaultPrimarySightseeingItem,
      SightseeingHighlightsSliceDefaultPrimary,
      SightseeingHighlightsSliceVariation,
      SightseeingHighlightsSliceDefault,
      SummaryPriceSlice,
      SummaryPriceSliceDefaultPrimary,
      SummaryPriceSliceVariation,
      SummaryPriceSliceDefault,
      SummaryTourSlice,
      SummaryTourSliceDefaultPrimaryTripYearItem,
      SummaryTourSliceDefaultPrimary,
      SummaryTourSliceVariation,
      SummaryTourSliceDefault,
      TravelHighlightsSlice,
      TravelHighlightsSliceDefaultPrimaryTravelHighlightsItem,
      TravelHighlightsSliceDefaultPrimary,
      TravelHighlightsSliceVariation,
      TravelHighlightsSliceDefault,
    };
  }
}
