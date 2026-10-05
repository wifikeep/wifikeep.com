import { PlatformTabs } from "@/components/PlatformTabs";
import { QrDemo } from "@/components/QrDemo";
import { FaqSection } from "@/components/FaqSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 bg-grid-pattern">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Announcement badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>Syncing Windows, macOS, Linux, iOS & Android</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Never ask for the Wi-Fi password <span className="gradient-text">ever again</span>.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              WiFiKeep automatically synchronizes your Wi-Fi credentials across all your desktop and mobile devices. Share access securely with coworkers, guests, and family in one click.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a
                href="https://app.wifikeep.com/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-[1.02] transition-all"
              >
                <span>Launch Web App (Free)</span>
                <span>→</span>
              </a>
              <a
                href="#platforms"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span>Download Desktop & Mobile</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Free for single users
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-indigo-400 font-bold">🔒</span> AES-256-GCM encryption
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">⚡</span> FreeIPA / LDAP ready
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-sky-400 font-bold">💳</span> $3/seat sharing via Billama
              </span>
            </div>
          </div>

          {/* Hero Visual Mockup: Simulated WiFiKeep Vault */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-slate-800/90 bg-slate-900/90 shadow-2xl p-4 sm:p-6 backdrop-blur-xl">
              {/* Mockup Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-3 font-semibold text-slate-300">app.wifikeep.com/networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded bg-indigo-500/10 px-2 py-0.5 text-[11px] font-medium text-indigo-400 border border-indigo-500/20">
                    <span>🔐 AES-256 Vault Active</span>
                  </span>
                </div>
              </div>

              {/* Mock Networks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Network Card 1 */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">DesignStudio-5G</h4>
                      <p className="text-xs text-slate-500">WPA2/WPA3 Personal</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                      Owned
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/60 text-xs">
                    <span className="text-slate-400 font-mono">••••••••••••</span>
                    <span className="text-indigo-400 text-[11px]">Synced (3 devices)</span>
                  </div>
                </div>

                {/* Network Card 2 */}
                <div className="rounded-xl border border-indigo-500/40 bg-indigo-950/20 p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">HQ-Boardroom</h4>
                      <p className="text-xs text-slate-400">WPA3 Enterprise</p>
                    </div>
                    <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-semibold text-indigo-300 border border-indigo-500/30">
                      Shared (8 seats)
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-indigo-900/40 text-xs">
                    <span className="text-slate-400 font-mono">••••••••••••</span>
                    <span className="text-emerald-400 text-[11px]">Billama: Active</span>
                  </div>
                </div>

                {/* Network Card 3 */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">Mountain-Cabin-Mesh</h4>
                      <p className="text-xs text-slate-500">WPA2 Personal</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                      Owned
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/60 text-xs">
                    <span className="text-slate-400 font-mono">••••••••••••</span>
                    <span className="text-indigo-400 text-[11px]">Synced (Win + Mac)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section id="features" className="py-24 border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Core Capabilities</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Engineered for seamless connectivity</h3>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Say goodbye to copying passphrases into Slack, texting passwords insecurely, or flipping over office routers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-400 text-2xl mb-6">
                🔄
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Bidirectional Sync</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect to a new network on your MacBook, and your Windows desktop and Linux workstation configure it automatically. No manual exports required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10 text-purple-400 text-2xl mb-6">
                👥
              </div>
              <h4 className="text-xl font-bold text-white mb-2">One-Click Sharing</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Share any Wi-Fi network by FreeIPA username or email. Assign granular Read or Manage permissions, and instantly revoke access when contracts end.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-400 text-2xl mb-6">
                🛡️
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Envelope Encryption</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Zero-knowledge AES-256-GCM encryption with row ID binding as Authenticated Additional Data (AAD) and multi-key rotation capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Deep-Dive Tabs */}
      <section id="platforms" className="py-24 border-t border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Operating Systems</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Full support across your entire stack</h3>
            <p className="text-slate-400 mt-3 text-sm">
              From desktop system daemons to native mobile hotspot APIs, see how WiFiKeep integrates with each platform.
            </p>
          </div>

          <PlatformTabs />
        </div>
      </section>

      {/* Interactive Wi-Fi QR Demo */}
      <section className="py-24 border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Instant Onboarding</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Connect guests in two seconds</h3>
            <p className="text-slate-400 mt-3 text-sm">
              Standardized Wi-Fi QR codes allow any iOS or Android device to scan and join instantly without installing apps or typing long passwords.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <QrDemo />
          </div>
        </div>
      </section>

      {/* Security & Architecture */}
      <section id="security" className="py-24 border-t border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Security Architecture</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Zero-knowledge by design</h3>
            <p className="text-slate-400 mt-3 text-sm">
              Compare how WiFiKeep protects corporate and personal credentials compared to traditional practices.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold uppercase text-slate-400">
                  <th className="py-4 px-6">Security Dimension</th>
                  <th className="py-4 px-6">Sticky Notes / Whiteboards</th>
                  <th className="py-4 px-6">Slack / WhatsApp Chat</th>
                  <th className="py-4 px-6 text-indigo-400">WiFiKeep</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Data at Rest</td>
                  <td className="py-4 px-6 text-rose-400">Plaintext (Physically exposed)</td>
                  <td className="py-4 px-6 text-amber-400">Plaintext in cloud chat logs</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">AES-256-GCM Envelope Encrypted</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Access Revocation</td>
                  <td className="py-4 px-6 text-rose-400">Must change password on all APs</td>
                  <td className="py-4 px-6 text-rose-400">Must change password on all APs</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">1-Click Immediate Seat Revocation</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Identity & SSO</td>
                  <td className="py-4 px-6 text-slate-500">None</td>
                  <td className="py-4 px-6 text-slate-500">Chat account only</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">FreeIPA LDAP Authentication & RBAC</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Credential Rotation</td>
                  <td className="py-4 px-6 text-rose-400">Manual retyping on 20+ devices</td>
                  <td className="py-4 px-6 text-rose-400">Manual retyping on 20+ devices</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">Automatic sync to all authorized devices</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Telemetry & Privacy</td>
                  <td className="py-4 px-6 text-slate-500">N/A</td>
                  <td className="py-4 px-6 text-rose-400">Third-party commercial tracking</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">Private OpenSnowcat (No credentials tracked)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Transparent Pricing</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Free for individuals. Simple for teams.</h3>
            <p className="text-slate-400 mt-3 text-sm">
              Use WiFiKeep for your personal laptops, desktops, and phones at no cost. Only pay when sharing with others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Personal</h4>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                    Individual
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">$0</span>
                  <span className="text-slate-400 text-sm">/ forever</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  Perfect for individuals managing Wi-Fi passwords across laptops, desktops, phones, and tablets.
                </p>

                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Unlimited saved Wi-Fi networks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Unlimited devices (Windows, Mac, Linux, iOS, Android)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> AES-256-GCM zero-knowledge vault
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Background synchronization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Camera-scannable WIFI: QR generation
                  </li>
                </ul>
              </div>

              <a
                href="https://app.wifikeep.com/signup"
                className="w-full text-center rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                Sign Up for Free
              </a>
            </div>

            {/* Team Tier */}
            <div className="rounded-2xl border border-indigo-500/50 bg-gradient-to-b from-indigo-950/30 to-slate-900/60 p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Popular
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Team Sharing</h4>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                    Per-Seat
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">$3</span>
                  <span className="text-slate-400 text-sm">/ seat / month</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  Designed for companies, agencies, co-working spaces, and families who need secure Wi-Fi sharing.
                </p>

                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Everything in Personal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Share networks with coworkers & guests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Granular permissions (Read vs Manage)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Instant access revocation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Automated seat billing via Billama
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> FreeIPA corporate user onboarding
                  </li>
                </ul>
              </div>

              <a
                href="https://app.wifikeep.com/signup"
                className="w-full text-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors"
              >
                Get Started with Team Sharing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Got Questions?</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h3>
            <p className="text-slate-400 mt-3 text-sm">
              Everything you need to know about WiFiKeep synchronization, platforms, and security.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 border-t border-slate-800/80 bg-gradient-to-b from-slate-950 to-indigo-950/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Ready to synchronize your Wi-Fi networks?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Create your account in under 30 seconds. Sign in at <strong>app.wifikeep.com</strong> to start synchronizing and sharing networks right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.wifikeep.com/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all hover:scale-[1.02]"
            >
              <span>Get Started Free</span>
              <span>→</span>
            </a>
            <a
              href="https://app.wifikeep.com/login"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-3.5 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span>Sign In to app.wifikeep.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
