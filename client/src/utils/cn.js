import {clsx} from "clsx";
import { twMerge } from "twmerge";
export function cn(...inputs){
    return twMerge(clsx(inputs));
}
