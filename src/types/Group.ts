import Item from "./Item";

interface Group {
  id: number;
  name: string;
  description: null;
  items: Item[];
}

export default Group;
