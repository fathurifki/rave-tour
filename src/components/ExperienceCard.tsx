import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { CheckCircle } from "lucide-react";

interface Experience {
  image_experience: any;
  type: string;
  day: number;
  special_request: string | null;
  description: string;
  title: string;
  color_tag: string;
}

export default function ExperienceCard({ ...props }: Experience) {
  return (
    <Card className="max-w-lg overflow-hidden min-w-[28rem] min-h-[25rem] flex flex-col">
      <div className="relative">
        <PrismicImage
          field={props.image_experience}
          className="w-full h-48 object-cover"
          imgixParams={{ w: 400, h: 1200, fit: "fill" }}
        />
        {props.type && (
          <div 
            className={`absolute top-3 left-3 px-3 py-1 rounded-md text-sm font-semibold ${
              props.type.toLowerCase() === 'iconic' ? 'text-white' : 'text-gray-800'
            }`}
            style={{ backgroundColor: props.color_tag }}
          >
            {props.type} Experience
          </div>
        )}
        {props.special_request && (
          <div 
            className={`absolute top-3 left-3 px-3 py-1 rounded-md text-sm font-semibold text-white`}
            style={{ backgroundColor: props.color_tag }}
          >
            {props.special_request}
          </div>
        )}
      </div>
      <CardTitle className="px-6 py-2 text-lg font-bold">{props.title}</CardTitle>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="text-sm text-gray-600 mb-4 overflow-hidden">
          {typeof props.description === 'string' ? (
            <p className="line-clamp-5">{props.description}</p>
          ) : (
            <PrismicRichText
              field={props.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="line-clamp-4">{children}</p>
                ),
              }}
            />
          )}
        </div>
        <div className="flex space-x-3 items-center text-purple-700">
          <CheckCircle className="w-5 h-5 mr-2`" />
          <span className="text-sm font-semibold">Included With Trip</span>
        </div>
      </CardContent>
    </Card>
  );
}
