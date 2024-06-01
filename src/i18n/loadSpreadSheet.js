import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { credentials } from "../i18n/credentials.js";

const GOOGLE_SPREADSHEET_DOC_ID =
  "1WvRp8d3u8NCIbAHm9V48-cLsDsyjriIELUCL_1mW-88";
const VITE_GOOGLE_SPREADSHEET_ID = "0";
const languages = ["ko-KR", "en-US"];
const header = {
  key: "KEY",
  "ko-KR": "KO",
  "en-US": "EN",
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const localesPath = path
  .join(dirname, "../data/locales/")
  .replace(`/{{lng}}/{{ns}}.json`, "");

export async function loadSpreadSheet() {
  const serviceAccountAuth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(
    GOOGLE_SPREADSHEET_DOC_ID,
    serviceAccountAuth
  );

  await doc.loadInfo();

  const sheet = doc.sheetsById[VITE_GOOGLE_SPREADSHEET_ID];
  const rows = await sheet.getRows();

  const translations = {};

  rows.forEach((row) => {
    const key = row.get(header.key);
    languages.forEach((lng) => {
      const translation = row.get(header[lng]);

      if (!translations[lng]) {
        translations[lng] = {};
      }

      translations[lng][key] = translation ?? "";
    });
  });

  fs.readdir(localesPath, (error, localeFilesList) => {
    if (error) {
      throw error;
    }

    localeFilesList.forEach((lng) => {
      const localeJsonFilePath = `${localesPath}/${lng}/translation.json`;

      const jsonString = JSON.stringify(translations[lng], null, 2);

      fs.writeFile(localeJsonFilePath, jsonString, "utf8", (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
}

loadSpreadSheet();
