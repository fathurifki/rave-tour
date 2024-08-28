import { Fragment, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ToastContainer, toast, Bounce, CloseButton } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function CustomDatePicker({ date }: { date: any }) {
  const year = date.map((item: any) => {
    const fullDate = item.year;
    return typeof fullDate === "string"
      ? parseInt(fullDate.split("-")[0])
      : fullDate;
  });
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleYearChange = (increment: number) => {
    setSelectedYear((prev: any) => prev + increment);
  };

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
  };

  const isCurrentYear = new Date().getFullYear() === selectedYear;

  const notify = () =>
    toast.info("Seasson Has Changed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: {
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      },
    });

  return (
    <div className="relative -top-[1.3rem]">
      <ToastContainer />
      <div className="w-64 border border-gray-200 rounded-md bg-white absolute z-10">
        <div className="grid grid-cols-3 gap-2 rounded-md h-full border-b border-gray-200">
          {year.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`text-center py-2 ${
                idx === 0
                  ? "rounded-l-md"
                  : idx === year.length - 1
                    ? "rounded-r-md"
                    : ""
              } cursor-pointer ${
                selectedYear === item
                  ? "bg-[#2D5A7B] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setSelectedYear(item);
                setShowCalendar(true);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            selectedYear && showCalendar
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <Fragment>
            <div className="p-4" ref={modalRef}>
              <div className="flex justify-between items-center mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleYearChange(-1)}
                  disabled={selectedYear === year[0]}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold text-[#2D5A7B]">
                  {selectedYear}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleYearChange(1)}
                  disabled={selectedYear === year.at(-1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {months.map((month) => {
                  const isDisabled =
                    isCurrentYear &&
                    new Date(`${selectedYear}-${month}-01`) < new Date();
                  return (
                    <Button
                      key={month}
                      variant="outline"
                      size="sm"
                      className={`
                    ${selectedMonth === month ? "bg-[#2D5A7B] text-white" : "text-gray-600"}
                    ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                      onClick={() => {
                        handleMonthSelect(month);
                        setShowCalendar(false);
                        setTimeout(() => {
                          notify();
                        }, 500);
                      }}
                      disabled={isDisabled}
                    >
                      {month}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className="p-2">
              <Button
                onClick={() => setShowCalendar(false)}
                variant="ghost"
                className="w-full text-[#2D5A7B]"
              >
                Close
              </Button>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  );
}
