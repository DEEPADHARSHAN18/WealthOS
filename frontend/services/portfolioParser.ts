import * as XLSX from "xlsx";

export function parseGoldSheet(sheet: XLSX.WorkSheet) {
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: "",
  }) as any[][];

  const headers = rows[0];
  const data = rows.slice(1);

  return {
    headers,
    data,
    totalRows: data.length,
  };
}