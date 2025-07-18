import { cn } from '@/lib/utils'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { Container } from './container'
import { SearchInput } from './search-input'

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    // '' означает базовый класс, который будет применен к div
    <header className={cn('border border-b', className)}>

      {/* используем контейнер для выравнивания содержимого */}
        <Container className="flex items-center justify-between py-8">

          {/* левая часть верстки */}
            <Link href={"/"}>
            <div className="flex items-center gap-4">
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
                <div>
                    <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                    <p className="text-sm text-gray-400 leading-3">вкуснее уже не куда</p>
                </div>
            </div> 
            </Link>
            {/* поиск */}
            <div className='mx-10 flex-1'>
              <SearchInput/>
            </div>

            {/* правая часть верстки */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className='items-center gap-1'>
                <User size={16} />
                Войти</Button>

              <div>
              <Button className='group relative'>
                <b>520 ₽</b>
                <span className="h-full w-[1px] bg-white/30 mx-3" />
                 <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                  <ShoppingCart size={16} className=" relative" strokeWidth={2} />
                  <b>3</b>
                  </div> 
                  {/* тут происходит работа со стрелкой при наведении, меняется прозрачность и т д */}
                  <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  />
              </Button>
              </div>  
            </div>
        </Container>
    </header>
  );
};
