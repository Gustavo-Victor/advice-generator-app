import { ErrorProps } from "../../types/error";
import "./styles.scss";

export default function Error({ message } : ErrorProps) {
    return (
        <div className="error">
            <h2>Error</h2>
            <p>{message}</p>
        </div>
    );
};