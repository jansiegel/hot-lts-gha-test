/**
 * Validates that a version string is in semver format (X.Y.Z).
 * @param {string} version
 * @returns {boolean}
 */
export function isVersionValid(version) {
  console.log(`[mock] isVersionValid("${version}")`);
  return /^\d+\.\d+\.\d+$/.test(version);
}

/**
 * Validates that a release date string is in DD/MM/YYYY format and is a real date.
 * @param {string} dateStr
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateReleaseDate(dateStr) {
  console.log(`[mock] validateReleaseDate("${dateStr}")`);
  const match = dateStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) {
    return { valid: false, error: `Invalid date format: ${dateStr} (expected DD/MM/YYYY)` };
  }
  return { valid: true };
}

/**
 * Sets the version across package files.
 * @param {string} version
 */
export function setVersion(version) {
  console.log(`[mock] setVersion("${version}")`);
}

/**
 * Sets the release date in project metadata.
 * @param {string} releaseDate
 */
export function setReleaseDate(releaseDate) {
  console.log(`[mock] setReleaseDate("${releaseDate}")`);
}
