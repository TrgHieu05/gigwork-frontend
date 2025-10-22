"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  subtitle?: string
  icon?: React.ReactNode
  showSubtitle?: boolean
  showIcon?: boolean
}

function Label({
  className,
  subtitle,
  icon,
  showSubtitle = false,
  showIcon = false,
  children,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-start gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {showIcon && icon && (
        <span className="shrink-0 mt-0.5">{icon}</span>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium leading-none">{children}</span>
        {showSubtitle && subtitle && (
          <span className="mt-1 text-xs text-muted-foreground">{subtitle}</span>
        )}
      </div>
    </LabelPrimitive.Root>
  )
}

export { Label }
