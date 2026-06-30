"use client";

import { useRef, useState } from "react";

export default function ImportPortfolio() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

async function handleImport() {
  if (!file) return;

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/portfolio/import", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    console.log(data.gold);

    alert(
      `Gold sheet imported successfully!

    Rows: ${data.gold.totalRows}

    Columns: ${data.gold.headers.length}`
    );

    alert("Summary sheet loaded.\n\nOpen Developer Console (F12).");
  } catch (error) {
    console.error(error);
    alert("Import failed.");
  } finally {
    setLoading(false);
  }
}

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-2xl font-bold text-white">
        {loading ? "Importing..." : "Import Portfolio"}
      </h2>

      <p className="mt-2 text-zinc-400">
        Upload your Excel portfolio (.xlsx)
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".xlsx,.xls"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="mt-8 cursor-pointer rounded-xl border-2 border-dashed border-zinc-700 p-16 text-center transition hover:border-blue-500 hover:bg-zinc-800"
      >

        <div className="text-6xl">
            📂
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-white">
          Click to Select Portfolio
        </h3>

        <p className="mt-2 text-zinc-400">
          Excel (.xlsx)
        </p>

      </div>

      {file && (

        <div className="mt-8 rounded-xl bg-zinc-800 p-5">

          <p className="text-lg font-semibold text-green-400">
            ✅ {file.name}
          </p>

          <p className="mt-2 text-zinc-400">
            Size: {(file.size / 1024).toFixed(2)} KB
          </p>

        </div>

      )}

        <button
          disabled={!file}
          onClick={handleImport}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
        >
            Import Portfolio
        </button>

    </div>
  );
}