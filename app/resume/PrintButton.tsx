"use client";

export default function PrintButton() {
  return <button onClick={() => window.print()} className="print-button">Print / Save PDF</button>;
}
