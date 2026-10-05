"use client";

import { useState } from "react";

interface PlatformInfo {
  id: string;
  name: string;
  badge: string;
  icon: string;
  headline: string;
  description: string;
  capabilities: {
    import: string;
    apply: string;
    technology: string;
  };
  sampleCommand?: string;
  downloadLabel: string;
  downloadUrl: string;
}

const PLATFORMS: PlatformInfo[] = [
  {
    id: "windows",
    name: "Windows",
    badge: "Native Electron Client",
    icon: "🪟",
    headline: "Automated Wi-Fi Sync for Windows 10 & 11",
    description:
      "WiFiKeep connects directly to the native Windows WLAN API. It imports existing Wi-Fi profiles with one click and configures new connections automatically without command-line headaches.",
    capabilities: {
      import: "Exports saved profiles via netsh wlan XML parser",
      apply: "Applies networks directly to Windows WLAN service",
      technology: "Native Electron Desktop App + C++ WLAN bindings",
    },
    sampleCommand: "netsh wlan show profile",
    downloadLabel: "Download Windows Installer (.exe)",
    downloadUrl: "https://github.com/wifikeep/wifikeep/releases",
  },
  {
    id: "macos",
    name: "macOS",
    badge: "Apple Silicon & Intel",
    icon: "🍎",
    headline: "Seamless macOS Keychain Integration",
    description:
      "Runs quietly in your macOS menu bar. Safely retrieves saved network credentials through macOS Keychain prompts and applies preferred networks with networksetup.",
    capabilities: {
      import: "Queries preferred SSIDs and unlocks Keychain entries",
      apply: "Adds preferred wireless networks via networksetup",
      technology: "Electron DMG with Hardened Runtime & Notarization",
    },
    sampleCommand: "networksetup -listpreferredwirelessnetworks en0",
    downloadLabel: "Download macOS DMG (.dmg)",
    downloadUrl: "https://github.com/wifikeep/wifikeep/releases",
  },
  {
    id: "linux",
    name: "Linux",
    badge: "NetworkManager Support",
    icon: "🐧",
    headline: "Built for Linux Power Users & Sysadmins",
    description:
      "Engineered for Ubuntu, Debian, Fedora, Arch, and any distro running NetworkManager. Synchronize passwords directly with nmcli and polkit authorization.",
    capabilities: {
      import: "Reads /etc/NetworkManager keyfiles and active connections",
      apply: "Creates 802-11-wireless connection profiles with nmcli",
      technology: "Packaged as .AppImage, .deb, and source",
    },
    sampleCommand: "nmcli -s -g 802-11-wireless-security.psk connection show <SSID>",
    downloadLabel: "Download Linux AppImage / .deb",
    downloadUrl: "https://github.com/wifikeep/wifikeep/releases",
  },
  {
    id: "ios",
    name: "iOS",
    badge: "Apple iOS 15+",
    icon: "📱",
    headline: "Mobile Companion for iPhone & iPad",
    description:
      "Because iOS strictly protects saved passwords in sandbox storage, WiFiKeep provides one-tap network joining via NEHotspotConfiguration and high-resolution QR scanning.",
    capabilities: {
      import: "Scan QR code or manual entry",
      apply: "One-tap connect via NEHotspotConfiguration API",
      technology: "Flutter mobile application with native entitlements",
    },
    downloadLabel: "Join iOS TestFlight",
    downloadUrl: "https://app.wifikeep.com",
  },
  {
    id: "android",
    name: "Android",
    badge: "Android 10+",
    icon: "🤖",
    headline: "Wi-Fi Suggestions & QR Code Scanner",
    description:
      "Utilizes Android's modern Wi-Fi Network Suggestion API. Join secured home and office networks without manually retyping long complex passphrases.",
    capabilities: {
      import: "Scan QR code or manual entry",
      apply: "Registers suggestions with WifiNetworkSuggestion API",
      technology: "Flutter mobile application with Jetpack Wi-Fi APIs",
    },
    downloadLabel: "Download Android APK",
    downloadUrl: "https://app.wifikeep.com",
  },
];

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState<string>("windows");
  const platform = PLATFORMS.find((p) => p.id === activeTab) || PLATFORMS[0];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === p.id
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span>{p.icon}</span>
            <span>{p.name}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 mb-3">
            <span>{platform.badge}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{platform.headline}</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{platform.description}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                ✓
              </span>
              <div>
                <span className="text-xs font-semibold text-slate-200">Import: </span>
                <span className="text-xs text-slate-400">{platform.capabilities.import}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                ✓
              </span>
              <div>
                <span className="text-xs font-semibold text-slate-200">Apply to OS: </span>
                <span className="text-xs text-slate-400">{platform.capabilities.apply}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 text-xs">
                ⚙
              </span>
              <div>
                <span className="text-xs font-semibold text-slate-200">Technology: </span>
                <span className="text-xs text-slate-400">{platform.capabilities.technology}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://app.wifikeep.com"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors"
            >
              <span>Get for {platform.name}</span>
              <span>→</span>
            </a>
            <a
              href="https://app.wifikeep.com"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Open in Web Browser
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-slate-500">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-xs">wifikeep-agent --{platform.id}</span>
          </div>
          <p className="text-slate-500"># Platform synchronization status</p>
          <p className="text-indigo-400 mt-2">$ wifikeep-cli status</p>
          <p className="text-emerald-400 mt-1">✔ Adapter: {platform.name} Native</p>
          <p className="text-slate-300 mt-1">✔ Storage: Supabase AES-256-GCM (AAD bound)</p>
          <p className="text-slate-300 mt-1">✔ Identity: FreeIPA LDAP (Authenticated)</p>
          <p className="text-slate-400 mt-2">
            [sync] 14 networks loaded | 2 shared with team
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800/80 text-slate-500 text-[11px]">
            Encryption Key: k1:AES-GCM-256 (Rotatable)
          </div>
        </div>
      </div>
    </div>
  );
}
