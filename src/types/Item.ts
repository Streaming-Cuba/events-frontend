import Metadata from "./Metadata";

interface Item {
  id: number;
  name: string;
  description: string | null;
  coverPath: string | null;
  votes: number;
  socials: null;
  metadata: Metadata | null;
  metadataJson: string;
  type: null;
  number: 5;
}

export default Item;
