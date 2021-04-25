import Group from "./Group";

interface Event {
  id: number;
  identifier: string;
  name: string;
  subtitle: string | null;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  status: null;
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
}

export default Event;
