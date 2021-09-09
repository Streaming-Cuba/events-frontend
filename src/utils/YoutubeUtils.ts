export function getVideoImageURL (videURL?: string): string {
  return videURL?
    `http://img.youtube.com/vi/${videURL.split("https://youtu.be/")[1]}/0.jpg`: null;
}
