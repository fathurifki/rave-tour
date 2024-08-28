"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismicRichText } from "@prismicio/react";
import { Minus, Plus } from "lucide-react";
import { Fragment, useState } from "react";

export default function FaqComponent({ primary }: { primary: any }) {
  const { faq } = primary;
  const [expandedIndexes, setExpandedIndexes] = useState<Set<number>>(
    new Set()
  );

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prevIndexes) => {
      const newIndexes = new Set(prevIndexes);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };

  const handleExpandAll = () => {
    setExpandedIndexes(prev => prev.size === faq.length ? new Set() : new Set(Array.from({ length: faq.length }, (_, i) => i)));
  };

  return (
    <div>
      <p className="text-2xl font-bold mb-4">Frequently asked questions</p>
      <div
        className="cursor-pointer flex items-center text-md font-semibold mb-4 justify-end"
        onClick={handleExpandAll}
      >
        {expandedIndexes.size === faq.length
          ? "Collapse All"
          : "Expand All"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ml-2 w-8 h-8 transition-transform ${expandedIndexes.size === faq.length ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <Fragment>
        {faq.map((item: any, idx: number) => (
          <Card key={idx} className="mb-4">
            <CardTitle
              className={`text-sm ${expandedIndexes.has(idx) ? "bg-[#2D5A7B] text-white" : "bg-white "} p-6 leading-[135%] font-bold tracking-[-0.1px] flex justify-between items-center cursor-pointer`}
              onClick={() => toggleExpand(idx)}
            >
              {item.question}
              <button className="text-xl bg-gray-200 rounded-full p-1">
                {expandedIndexes.has(idx) ? (
                  <Minus className="w-6 h-6 text-[#414141]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#414141]" />
                )}
              </button>
            </CardTitle>
            <CardContent
              className={`text-sm text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndexes.has(idx) ? "max-h-96 py-6" : "max-h-0 py-0"
              }`}
            >
              <div className="space-y-4 text-md font-normal text-[#414141]">
                <PrismicRichText field={item.answer} />
              </div>
            </CardContent>
          </Card>
        ))}
      </Fragment>
    </div>
  );
}
