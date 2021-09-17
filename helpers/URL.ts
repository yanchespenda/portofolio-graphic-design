export const Segments = (url: string = window.location.pathname) => {
  return url.split("/").filter(s => s.length > 0)
}