// WICHTIG: Ersetze diese ID mit der ID deines Google Sheets.
// Du findest sie in der URL deiner Tabelle (der lange Code zwischen "/d/" und "/edit").
const sheetId = "DEINE_SHEET_ID_HIER_EINFÜGEN";
const sheetName = "Tabelle1"; // Name des Tabellenblatts, normalerweise "Tabelle1"

// WICHTIG: Stelle sicher, dass deine Google Tabelle die folgenden Spalten in dieser Reihenfolge hat:
// timestamp, guest_name, attendance_alm, attendance_civil, dietary, comments
function doPost(e) {
  // LockService verhindert, dass mehrere Anfragen gleichzeitig in die Tabelle schreiben
  // und sich gegenseitig stören.
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Warte bis zu 30 Sekunden auf den Lock

  try {
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    if (!sheet) {
      throw new Error("Das Tabellenblatt mit dem Namen '" + sheetName + "' wurde nicht gefunden.");
    }
    
    // Daten aus dem Formular holen
    const comments = e.parameter.comments;
    const guestsJSON = e.parameter.guestsJSON;
    
    if (!guestsJSON) {
      throw new Error("Keine Gästedaten (guestsJSON) empfangen.");
    }
    
    // Den JSON-String in ein JavaScript-Objekt umwandeln
    const guests = JSON.parse(guestsJSON);
    const timestamp = new Date();

    // Für jeden Gast in der Liste eine eigene Zeile in der Tabelle erstellen
    guests.forEach(guest => {
      sheet.appendRow([
        timestamp,                  // Gleicher Zeitstempel für die ganze Gruppe
        guest.name,                 // guest_name (der individuelle Gast)
        guest.attendance_alm || '',   // attendance_alm ('yes', 'no', oder leer)
        guest.attendance_civil || '', // attendance_civil ('yes', 'no', oder leer)
        guest.dietary,              // dietary (enthält Details oder ist leer)
        comments                    // comments (für alle gleich)
      ]);
    });

    // Erfolgsmeldung als einfachen Text zurücksenden, um CORS-Probleme zu vermeiden
    return ContentService
      .createTextOutput("success")
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Loggt den Fehler serverseitig für Debugging-Zwecke
    console.error("Fehler beim Verarbeiten des Formulars: " + error.toString(), e.parameter);

    // Fehlermeldung als einfachen Text an das Frontend zurücksenden
    return ContentService
      .createTextOutput(error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  } finally {
    // Den Lock immer freigeben, egal ob erfolgreich oder nicht
    lock.releaseLock();
  }
}