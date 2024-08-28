import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Fragment } from "react";
import Layout from "@/components/layout/layout";
import PriceDetailComponent from "@/components/Price";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("tour_detail_id", params.uid)
    .catch(() => notFound());

  const pageSummaryPrice = await client
    .getByUID("summary_price", params.uid)
    .catch(() => notFound());

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PriceDetailComponent primary={pageSummaryPrice?.data?.slices[0]?.primary}/>
      </div>
      <Layout>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("tour_detail_id", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("tour_detail_id");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
