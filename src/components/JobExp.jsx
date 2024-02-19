import { JOB_EXPERIENCE } from "@/app/constants";
import { JobExpItem } from "./JobExpItem";

export const JobExp = () =>
    <ol>
        {
            JOB_EXPERIENCE.map(item =>(
                <li>
                    <JobExpItem {...item}/>
                </li>))
        }
    </ol>;