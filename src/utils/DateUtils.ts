import moment from "moment";
import "moment/locale/es-do";

/**
 * 
 */
export enum Formats  {
    /**Example: 24 de abril de 2021 */
    LL = "LL",
    /**Example: 24 de abril de 2021 2:54 PM */
    LLL= "LLL"
}

export function formatDate(date: string | Date, format: Formats = Formats.LL): string {
  return moment(date).format(format);
}