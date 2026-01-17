"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders a styled Avatar root using Radix UI's Avatar primitive.
 *
 * @param className - Additional class names appended to the default avatar styles
 * @returns The Avatar root element with merged class names and `data-slot="avatar"`
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a Radix Avatar Image element with default square aspect and sizing, merging any provided CSS classes.
 *
 * @param className - Additional CSS classes to append to the default "aspect-square size-full" styles
 * @returns A React element for the avatar image whose `className` includes the default sizing classes plus any provided classes
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled wrapper for Radix Avatar.Fallback used when an avatar image is unavailable.
 *
 * @param className - Additional CSS classes to merge with the component's default styles.
 * @param props - Additional props forwarded to AvatarPrimitive.Fallback.
 * @returns A React element representing the avatar fallback.
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }