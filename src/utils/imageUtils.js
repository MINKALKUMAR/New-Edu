export function verifyImagePath(path) {
  try {
    // Try to import the image
    const img = new URL(path, import.meta.url);
    return img.href;
  } catch (error) {
    console.warn(`Invalid image path: ${path}`);
    return null;
  }
}
