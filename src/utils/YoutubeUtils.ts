export function getVideoImageURL (videURL?: string): string {
  return videURL?
    `http://img.youtube.com/vi/${videURL.split("https://youtu.be/")[1]}/0.jpg`:
    "https://res.cloudinary.com/streaming-cuba/image/upload/v1619921447/events/STREAMING_EVENTOS_MAS_GRANDE_1_cst2ib.png";
}
