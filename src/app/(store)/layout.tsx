import { Header } from "@/components/header";
import { ReactNode } from "react";

interface StoreLayoutProps {
    children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
    return (
        <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
            <Header />
            {children}
        </div>
    )
}

// Aqui fica um exemplo de como declarar o tipo do objeto na mesma linha
// sem precisar criar uma interface como foi feito acima.
//export function StoreLayout2({ children }: { children: ReactNode }) {
//    return (
//        <div>
//            {children}
//        </div>
//    )
//}