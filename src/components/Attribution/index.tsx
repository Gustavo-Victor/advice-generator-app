import { AttributionProps } from "../../types/attribution";
import "./styles.scss";

function Attribution({author, link, challenge} : AttributionProps) {
    return (
        <div className='attribution'>
            <span>Challenge by <a target="_blank" href={challenge}>Frontend Mentor</a></span>
            <span>Coded by <a target="_blank" href={link}>{author}</a></span>
        </div>
    )
}

export default Attribution;