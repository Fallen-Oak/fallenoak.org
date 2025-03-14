export function isPonySubdomain() {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    
    // Check if the first part of the hostname is "pony"
    return parts[0] === "pony";
    console.log("Pony Checked")
  }
  console.log("Pony Not Checked")
  return false;
}