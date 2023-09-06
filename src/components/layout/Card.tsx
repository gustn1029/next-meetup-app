import { LayoutProps } from "@/types/interface";

export default function Card({ children }: LayoutProps) {
  return (
      <section className="max-w-[700px] w-full mx-auto bg-white rounded-[30px] p-8 shadow-xl">{children}</section>
  );
}
