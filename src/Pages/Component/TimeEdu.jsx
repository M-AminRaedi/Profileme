import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import {Typography} from '@mui/material';
import {SchoolRounded} from "@mui/icons-material";
import {devEdu} from "./details";
const TimeEdu = () => {
    return (
        <Timeline position="alternate">
            {devEdu.map((item, index) => {
                const isLast = index === devEdu.length - 1;
                return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color={isLast ? "warning" : "info"}>
                                <SchoolRounded color={isLast ? "warning" : "primary"}/>
                            </TimelineDot>
                            {!isLast && <TimelineConnector/>}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="caption" color="info">{item.cert}</Typography>
                            <Typography variant="body1" color="white">{item.year}</Typography>
                            <Typography variant="body2" color="white">{item.place}</Typography>
                            <Typography variant="body2" color="info">{item.major}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};
export default TimeEdu;
