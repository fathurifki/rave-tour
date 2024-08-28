import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CustomTooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  title?: string;
}

export default function CustomTooltip({
  content,
  children,
  side = "top",
  align = "center",
  title,
}: CustomTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent 
          side={side} 
          align={align}
          className="text-sm max-w-[24rem] space-y-2 p-4 font-sans"
        >
          <span className="font-semibold break-words">{title}</span>
          <p className="break-words">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
