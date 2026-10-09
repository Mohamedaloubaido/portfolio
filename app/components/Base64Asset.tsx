"use client";

import { useEffect, useState } from "react";

type ImageProps = {
  dataPath: string;
  alt: string;
  className?: string;
  mime?: string;
};

export function Base64Image({ dataPath, alt, className, mime = "image/webp" }: ImageProps) {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    let active = true;
    fetch(dataPath)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${dataPath}`);
        return response.text();
      })
      .then((data) => {
        if (active) setSrc(`data:${mime};base64,${data.trim()}`);
      })
      .catch(() => {
        if (active) setSrc("");
      });

    return () => {
      active = false;
    };
  }, [dataPath, mime]);

  if (!src) {
    return <div className={`${className ?? ""} asset-placeholder`} aria-label={`${alt} loading`} />;
  }

  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}

export function DownloadResumeButton({ className = "button ghost" }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  async function downloadResume() {
    setLoading(true);
    try {
      const response = await fetch("/assets/Mohammed_AlObaido_Resume.pdf.b64");
      if (!response.ok) throw new Error("Resume download failed");
      const base64 = (await response.text()).trim();
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "Mohammed_AlObaido_Resume.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button className={className} type="button" onClick={downloadResume} disabled={loading}>
      {loading ? "Preparing PDF…" : "Download resume PDF ↓"}
    </button>
  );
}
