import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wifikeep.com"),
  title: "WiFiKeep — Cross-Platform Wi-Fi Password Sync & Sharing",
  description:
    "Synchronize your Wi-Fi credentials seamlessly across Windows, macOS, Linux, iOS, and Android. Enterprise-grade AES-256 encryption, FreeIPA identity, and instant sharing.",
  keywords: [
    "wifi sync",
    "wifi password manager",
    "wifi sharing",
    "cross platform wifi",
    "windows wifi sync",
    "mac keychain wifi",
    "linux nmcli wifi",
    "ios wifi qr",
    "android wifi qr",
  ],
  authors: [{ name: "WiFiKeep" }],
  creator: "WiFiKeep",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wifikeep.com",
    title: "WiFiKeep — Cross-Platform Wi-Fi Password Sync & Sharing",
    description:
      "Never retype a Wi-Fi password. Keep your home, office, and guest networks in sync across all devices.",
    siteName: "WiFiKeep",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiFiKeep — Cross-Platform Wi-Fi Password Sync & Sharing",
    description:
      "Keep Wi-Fi passwords in sync across Windows, macOS, Linux, iOS, and Android with end-to-end security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 shadow-md shadow-indigo-500/20">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                  </svg>
                </div>
                <span className="text-xl font-black tracking-tight text-white">
                  WiFi<span className="text-indigo-400">Keep</span>
                </span>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#platforms" className="hover:text-white transition-colors">
                Platforms
              </a>
              <a href="#security" className="hover:text-white transition-colors">
                Security
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://app.wifikeep.com/login"
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2"
              >
                Sign In
              </a>
              <a
                href="https://app.wifikeep.com/signup"
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all hover:scale-[1.02]"
              >
                <span>Get Started Free</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-16 text-slate-400 text-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <circle cx="12" cy="20" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">WiFiKeep</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
                  The cross-platform Wi-Fi synchronization engine. Free for individuals, affordable per-seat sharing for teams.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Systems Operational · app.wifikeep.com</span>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Product</p>
                <ul className="space-y-2 text-xs">
                  <li><a href="https://app.wifikeep.com" className="hover:text-white transition-colors">Web App (app.wifikeep.com)</a></li>
                  <li><a href="#platforms" className="hover:text-white transition-colors">Desktop (Windows, macOS, Linux)</a></li>
                  <li><a href="#platforms" className="hover:text-white transition-colors">Mobile (iOS & Android)</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Enterprise</p>
                <ul className="space-y-2 text-xs">
                  <li><a href="#security" className="hover:text-white transition-colors">Zero-Knowledge AES-256</a></li>
                  <li><a href="#security" className="hover:text-white transition-colors">FreeIPA / LDAP Single Sign-On</a></li>
                  <li><a href="https://github.com/wifikeep/wifikeep/tree/main/deploy/helm/wifikeep" className="hover:text-white transition-colors">Kubernetes Helm Chart</a></li>
                  <li><a href="https://github.com/wifikeep/wifikeep/blob/main/deploy/docker-compose.yml" className="hover:text-white transition-colors">Docker Compose Stack</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Connect</p>
                <ul className="space-y-2 text-xs">
                  <li><a href="https://github.com/wifikeep/wifikeep" className="hover:text-white transition-colors">GitHub Repository</a></li>
                  <li><a href="https://billama.net" className="hover:text-white transition-colors">Billama Billing Platform</a></li>
                  <li><a href="https://app.wifikeep.com/login" className="hover:text-white transition-colors">Account Portal</a></li>
                  <li><a href="mailto:support@wifikeep.com" className="hover:text-white transition-colors">Contact Support</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
              <p>© {new Date().getFullYear()} WiFiKeep. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="https://app.wifikeep.com" className="hover:text-slate-400">Privacy Policy</a>
                <a href="https://app.wifikeep.com" className="hover:text-slate-400">Terms of Service</a>
                <a href="https://github.com/wifikeep/wifikeep" className="hover:text-slate-400">Source Code</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
