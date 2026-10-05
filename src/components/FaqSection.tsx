"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does WiFiKeep synchronize Wi-Fi passwords across different operating systems?",
    answer:
      "On desktop computers (Windows, macOS, and Linux), WiFiKeep interacts directly with native OS network stacks (Windows WLAN API via netsh, macOS Keychain via security & networksetup, and Linux NetworkManager via nmcli) to import your saved connections and apply vault networks directly to your system. On mobile devices (iOS and Android), where the OS sandbox prevents third-party apps from extracting saved passwords, WiFiKeep lets you join vault networks using Apple NEHotspotConfiguration and Android Wi-Fi Network Suggestions, as well as camera-scannable WIFI: QR codes.",
  },
  {
    question: "Is WiFiKeep free to use?",
    answer:
      "Yes! Individual use is 100% free forever. Single users can sync an unlimited number of Wi-Fi networks across unlimited Windows, macOS, Linux, iPhone, and Android devices without paying a dime. We only charge when you share Wi-Fi networks with other people, billed at a flat $3 per seat per month powered by Billama.",
  },
  {
    question: "How are my Wi-Fi credentials protected?",
    answer:
      "We treat Wi-Fi passwords with zero-knowledge security. Every password stored in our database is encrypted with AES-256-GCM envelope encryption. The network's unique ID is bound as Authenticated Additional Data (AAD) to prevent ciphertext relocation attacks, and multi-key rotation is supported. Your credentials are never stored or logged in plaintext.",
  },
  {
    question: "How does the team sharing & per-seat billing work?",
    answer:
      "When you share a network with a coworker, guest, or family member, they are assigned a seat in your organization. You can grant either 'Read' (view credentials & join) or 'Manage' (edit network details) permissions. Billing is automatically calculated at $3 per active sharing seat per month through our Billama integration. If you remove someone from your shared networks, your seat count adjusts automatically.",
  },
  {
    question: "Can I self-host WiFiKeep in my company's infrastructure?",
    answer:
      "Yes. The entire WiFiKeep backend is packaged as a production-ready Kubernetes Helm chart and local Docker Compose stack. It integrates directly with corporate FreeIPA / Red Hat IdM for LDAP authentication and RBAC, Supabase PostgreSQL for storage, and OpenSnowcat for private telemetry.",
  },
  {
    question: "Does WiFiKeep track what websites I visit?",
    answer:
      "Absolutely not. WiFiKeep is strictly a Wi-Fi credential synchronization tool. It has no VPN component, installs no browser extensions, and inspects zero network traffic. Our telemetry only counts anonymous product interactions (such as 'network_created' or 'sync_completed') via OpenSnowcat without ever sending SSIDs or passwords.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-white hover:text-indigo-400 transition-colors"
            >
              <span className="text-base">{faq.question}</span>
              <span
                className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-indigo-400" : "text-slate-400"
                }`}
              >
                ↓
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
