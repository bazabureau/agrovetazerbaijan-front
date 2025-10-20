import Link from "next/link";

const footerLinks = [
  { label: "Məhsullar", href: "/products" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Partnyorlarımız", href: "/partners" },
  { label: "Əməkdaşlıq", href: "/collaboration" },
  { label: "Xəbərlər", href: "/news" },
  { label: "Əlaqə", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface/95">
      <div className="page-container flex flex-col gap-8 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-foreground">Agrovet Azerbaijan</p>
          <p className="mt-2 max-w-sm">
            2007-ci ildən bəri heyvandarlıq və quşçuluq sektoruna yüksək keyfiyyətli baytarlıq
            preparatları, yem əlavələri və texniki dəstək təqdim edirik.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/70 bg-surface/95 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Agrovet MMC. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}
