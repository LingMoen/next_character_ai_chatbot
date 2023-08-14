'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UserButton } from '@clerk/nextjs'
import { Menu, Sparkles } from "lucide-react"
import { Poppins } from 'next/font/google'
import Link from "next/link"
const font = Poppins({
  weight: '600',
  subsets: ['latin']
})
export default function Navbar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu />
        <Link href='/'>
          <h1 className={cn("hidden text-xl font-bold text-primary md:block md:text-3xl", font.className)}>
            Companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant='premium' size='sm'>
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <UserButton />
      </div>
    </div>
  )
}