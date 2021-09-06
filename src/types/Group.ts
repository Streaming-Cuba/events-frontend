import Item from "./Item";
import Video from "./Video";

interface Group {
  childGroups: Group[];
  id: number;
  name: string;
  description: null;
  items: Item[];
  videos: Video[]
}

export default Group;
