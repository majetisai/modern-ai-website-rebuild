// The (marketing) route group organizes services, consulting, about, team, and careers pages.
// Navbar and Footer are applied globally via app/layout.tsx.
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
