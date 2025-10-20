"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Əsas", href: "/" },
  { label: "Məhsullar", href: "/products" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Partnyorlarımız", href: "/partners" },
  { label: "Əməkdaşlıq", href: "/collaboration" },
  { label: "Xəbərlər", href: "/news" },
  { label: "Əlaqə", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/80 backdrop-blur">
      <div className="page-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-base font-semibold text-white">
            AG
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Agrovet Azerbaijan</p>
            <p className="text-xs text-muted">Baytarlıq innovasiyası</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm transition",
                          active
                            ? "bg-brand text-white shadow shadow-brand/20"
                            : "text-muted hover:bg-muted/10 hover:text-brand"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/products#assistant">AI Assistent</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((state) => !state)}
            aria-label="Mobil menyunu aç"
            className="rounded-full"
          >
            {open ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-surface md:hidden">
          <div className="page-container flex flex-col gap-3 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm",
                  pathname === item.href
                    ? "bg-brand text-white"
                    : "text-muted hover:bg-muted/10 hover:text-brand"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full" onClick={() => setOpen(false)}>
              <Link href="/products#assistant">AI Assistent</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
