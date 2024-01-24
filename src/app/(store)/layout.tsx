import { ReactNode } from 'react'

import { CartProvider } from '@/contexts/cart-context'
import { Header } from '@/components/header'

interface StoreLayoutProps {
  children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}

// Aqui fica um exemplo de como declarar o tipo do objeto na mesma linha
// sem precisar criar uma interface como foi feito acima.
// export function StoreLayout2({ children }: { children: ReactNode }) {
//    return (
//        <div>
//            {children}
//        </div>
//    )
// }
