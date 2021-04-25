import Item from "./Item";

interface Group {
  childGroups: Group[];
  id: number;
  name: string;
  description: null;
  items: Item[];
}

export default Group;
