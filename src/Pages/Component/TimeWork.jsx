import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import { Typography } from '@mui/material';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import { devWork } from "./details";

const TimeWork = () => {
    return (
        <Timeline position="alternate">
            {devWork.map((item, index) => {

                return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" >
                                <DataObjectOutlinedIcon />
                             </TimelineDot>
                            {index !=3 ? <TimelineConnector /> : null}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="caption" color="warning">{item.cert}</Typography>
                            <Typography variant="body1" color="white">{item.year}</Typography>
                            <Typography variant="body2" color="grey">{item.place}</Typography>
                            <Typography variant="body2" color="warning">{item.major}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default TimeWork;
