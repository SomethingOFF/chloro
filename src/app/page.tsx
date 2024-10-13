import Section1 from "@/components/home/section1/section1";
import Section2 from "@/components/home/section2/section2";
import Section3 from "@/components/home/section3/section3";
import Section4 from "@/components/home/section4/section4";
import Section5 from "@/components/home/section5/section5";
import Section6 from "@/components/home/section6/section6";
import Section7 from "@/components/home/section7/section7";

export default function Home() {
  return (
    <>
      <div className="bg-primary-background text-primary-foreground h-full w-full select-none">
        <Section1 />
      </div>
      <div className="bg-[#FDF5F3] text-secondary-foreground h-full w-full select-none">
        <Section2 />
      </div>
      <div className="bg-primary-background text-primary-foreground h-full w-full select-none">
        <Section3 />
      </div>
      <div className="bg-[#FDF5F3] text-secondary-foreground h-auto w-full select-none">
        <Section4 />
      </div>
      <div className="bg-[#FDF5F3] text-secondary-foreground h-full w-full select-none">
        <Section5 />
      </div>
      <div className="bg-primary-background text-primary-foreground h-full w-full select-none">
        <Section6 />
      </div>
      <div className="bg-[#FDF5F3] text-secondary-foreground h-full w-full select-none">
        <Section7 />
      </div>
    </>
  );
}
