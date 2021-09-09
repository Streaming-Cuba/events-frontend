import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import Event from "../../../types/Event";
import Video from "../../../types/Video";

export default (req: NextApiRequest, res: NextApiResponse) => {

  const videos: Video[] = [];
  axios
    .get<Event>(`${process.env.NEXT_PUBLIC_API_URL}/event/premioslucas2021`)
    .then(r => {
      r.data.groups[0].items.forEach(item => {
        videos.push({
          ...JSON.parse(item.metadataJson), Id: item.id
        });
      });
    });

  const {q} = req.query;
  const results: Video[] = typeof q === "string"? videos.filter(
    video =>
      video.Title?.toLowerCase().includes(q.toLowerCase()) ||
            video.Author?.toLowerCase().includes(q.toLowerCase()) ||
            video.Number?.toString().toLowerCase().includes(q.toLowerCase())
  ) : [];
  res.statusCode = 200;
  res.end(JSON.stringify({results}));
};
