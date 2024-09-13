import { SectionCard } from "@/components/sectionCard";
import Image from "next/image";
import notFoundIcon from "@images/images/not-found/no-audio.png";
import heatBeatIcon from "@images/images/not-found/heart-beat.png";

export default function NotFound() {
  return (
    <>
      <SectionCard className="border-b border-secondary-400 py-[2rem] text-center">
        <h4 className="prose-headline-h4">Not Found</h4>
      </SectionCard>

      <SectionCard className="relative mt-[3rem] flex h-full w-full flex-col items-center justify-center">
        <Image
          src={notFoundIcon}
          width={100}
          height={80}
          alt="not found icon"
        />
        <p className="prose-headline-h6 pt-8 text-center">
          It seems like it 'lost its rhythm.'
        </p>
        <div className="h-auto w-auto">
          <Image
            src={heatBeatIcon}
            width={300}
            height={300}
            alt="not found icon"
            objectFit="contain"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </SectionCard>
    </>
  );
}
