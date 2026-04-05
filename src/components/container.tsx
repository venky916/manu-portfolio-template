"use client"
import { cn } from '@/lib/utils'
import React from 'react'

export const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={cn("max-w-4xl w-full mx-auto bg-white dark:bg-black", className)}>
      {children}
    </div>
  )
}


