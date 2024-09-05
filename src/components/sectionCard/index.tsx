import { ISectionCard } from "./interfaces";

export const SectionCard = ({ className, children }: ISectionCard) => {
  return (
    <section
      className={`w-full px-[5.313rem] tablet:mx-auto tablet:px-[1rem] ${className}`}
    >
      {children}
    </section>
  );
};
