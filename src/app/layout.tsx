import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2iE Connect — Plateforme Numérique des Étudiants 2iE",
  description:
    "Plateforme numérique d'accompagnement académique et professionnel des étudiants et boursiers de l'Institut International d'Ingénierie de l'Eau et de l'Environnement (2iE) — Mastercard Foundation.",
  keywords: ["2iE", "Mastercard Foundation", "étudiants", "Burkina Faso", "ingénierie", "eau", "environnement"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="2ie">
      <body className="font-sans antialiased bg-base-100">{children}</body>
    </html>
  );
}
