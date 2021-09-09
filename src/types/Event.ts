import Group from "./Group";

interface Event {
  id: number;
  identifier: string;
  name: string;
  subtitle: string | null;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  status: {
    id: number
    name: string,
    description: string,
  }| string;
  statusId: number;
  organizer: string | null;
  category: null;
  tags: null;
  socials: null;
  coverPath: string;
  shortCoverPath: string;
  interations: null;
  groups: Group[];
  createdAt: string;
  modifiedAt: string;
  location?: string
}

export default Event;
