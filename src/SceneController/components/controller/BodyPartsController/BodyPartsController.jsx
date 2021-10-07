import PartController from "./PartController";
import Accordion from "components/Accordion";

import "./BodyPartsController.css";
import MeshVisibilityController from "./MeshVisibilityController";

function BodyPartsController({ target }) {
    const { parts } = target;
    if (!parts) return null;

    const { list, others } = parts;

    return (
        <div className="BodyPartsController">
            {list.map(part => (
                <PartController target={parts[part]} name={part} />
            ))}
            {others.length && (
                <Accordion>
                    <>{list.length ? "Other Parts" : "Body Parts"}</>
                    <MeshVisibilityController list={others} />
                </Accordion>
            )}
        </div>
    );
}

export default BodyPartsController;
