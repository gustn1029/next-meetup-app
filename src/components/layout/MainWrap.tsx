import { LayoutProps } from "@/types/interface";

export default function MainWrap({children}: LayoutProps) {
    return <main className="my-[50px]">{children}</main>
}