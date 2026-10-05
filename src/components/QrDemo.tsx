"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";

export function QrDemo() {
  const [ssid, setSsid] = useState("WiFiKeep-Office-5G");
  const [authType, setAuthType] = useState<"WPA" | "nopass">("WPA");
  const [password, setPassword] = useState("QuantumSpeed88!");
  const [hidden, setHidden] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    let payload = `WIFI:S:${ssid.replace(/([\\;,:"])/g, "\\$1")};`;
    payload += `T:${authType};`;
    if (authType !== "nopass" && password) {
      payload += `P:${password.replace(/([\\;,:"])/g, "\\$1")};`;
    }
    if (hidden) {
      payload += "H:true;";
    }
    payload += ";";

    QRCode.toDataURL(payload, {
      width: 260,
      margin: 2,
      color: {
        dark: "#0f172a",
        light: "#ffffff",
      },
    })
      .then(setQrDataUrl)
      .catch(() => {});
  }, [ssid, authType, password, hidden]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 mb-3">
            <span>✨ Interactive Demo</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Instant Wi-Fi QR Generator</h3>
          <p className="text-slate-400 text-sm mb-6">
            Type any Wi-Fi details below. WiFiKeep generates standardized <code>WIFI:</code> QR codes that any iOS or Android camera can scan to connect in under 2 seconds.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Network Name (SSID)
              </label>
              <input
                type="text"
                value={ssid}
                onChange={(e) => setSsid(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                placeholder="Enter SSID..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Security
                </label>
                <select
                  value={authType}
                  onChange={(e) => setAuthType(e.target.value as "WPA" | "nopass")}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="WPA">WPA / WPA2 / WPA3</option>
                  <option value="nopass">Open (No password)</option>
                </select>
              </div>

              {authType !== "nopass" && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Password
                  </label>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                    placeholder="Enter password..."
                  />
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="hidden-check"
                checked={hidden}
                onChange={(e) => setHidden(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="hidden-check" className="text-xs text-slate-300">
                Hidden SSID
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <div className="relative p-3 bg-white rounded-2xl shadow-xl">
            {qrDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qrDataUrl} alt={`QR Code for ${ssid}`} className="w-52 h-52 block rounded-lg" />
            ) : (
              <div className="w-52 h-52 flex items-center justify-center text-slate-400 text-xs">
                Rendering QR...
              </div>
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs font-semibold text-white tracking-wide">{ssid || "Untitled Network"}</p>
            <p className="text-xs text-slate-400 mt-0.5">Point phone camera to join</p>
          </div>
        </div>
      </div>
    </div>
  );
}
