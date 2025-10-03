'use client';

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { trackButtonClick } from "@/lib/analytics"

interface HeroPillProps {
  href?: string
  label: string
  announcement?: string
  className?: string
  isExternal?: boolean
  onClick?: () => void
}

export function HeroPill({
  href,
  label,
  announcement = "📣 Announcement",
  className,
  isExternal = false,
  onClick,
}: HeroPillProps) {
  // Handle click tracking and custom onClick
  const handleClick = () => {
    trackButtonClick(
      'Announcement Banner',
      `Header - ${announcement}`
    );

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
  };

  const content = (
    <>
      <div className={cn(
        "w-fit rounded-full bg-brandBlue px-3 py-1",
        "text-xs font-semibold text-white sm:text-sm",
        "text-center"
      )}>
        {announcement}
      </div>
      <p className="text-xs font-medium text-navy sm:text-sm">
        {label}
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33312 8.78141L1.75712 5.20541L0.814453 6.14808L5.99979 11.3334L11.1851 6.14808L10.2425 5.20541L6.66645 8.78141V0.666748H5.33312V8.78141Z"
          fill="currentColor"
          className="text-navy"
        />
      </svg>
    </>
  );

  // If onClick is provided without href, render as button
  if (onClick && !href) {
    return (
      <motion.button
        onClick={handleClick}
        className={cn(
          "flex w-auto items-center space-x-2 rounded-full",
          "bg-lightBlue/50 ring-1 ring-brandBlue/30",
          "px-3 py-2 whitespace-pre hover:bg-lightBlue/70 transition-colors",
          "cursor-pointer",
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {content}
      </motion.button>
    );
  }

  if (isExternal && href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "flex w-auto items-center space-x-2 rounded-full",
          "bg-lightBlue/50 ring-1 ring-brandBlue/30",
          "px-3 py-2 whitespace-pre hover:bg-lightBlue/70 transition-colors",
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link
        href={href!}
        onClick={handleClick}
        className={cn(
          "flex w-auto items-center space-x-2 rounded-full",
          "bg-lightBlue/50 ring-1 ring-brandBlue/30",
          "px-3 py-2 whitespace-pre hover:bg-lightBlue/70 transition-colors",
          className
        )}
      >
        {content}
      </Link>
    </motion.div>
  );
}
