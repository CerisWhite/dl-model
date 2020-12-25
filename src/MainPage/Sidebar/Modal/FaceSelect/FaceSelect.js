import { useState, useContext, lazy, Suspense } from "react";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import FaceBox from "./FaceBox";
import { SettingsContext, DispatchContext } from "context/SettingsContext";

import faceOffsetFix from "data/face_offset";
import useStyles from "./styles/FaceSelectStyles";

const FacePartSelector = lazy(() =>
    import("components/selectors/FacePartSelector")
);
const Button = lazy(() => import("@material-ui/core/Button"));
const titles = {
    face: "Select Face",
    eye: "Select Eyes",
    mouth: "Select Mouth",
};

function FaceSelect(props) {
    const { mode, closeModal, handleSelect } = props;
    const dispatch = useContext(DispatchContext);
    const {
        model: { eyeTexture, mouthTexture, eyeIdx, mouthIdx },
    } = useContext(SettingsContext);

    const [facePart, setFacePart] = useState(mode !== "face" ? mode : "both");

    const eyeOffsetFix = faceOffsetFix[eyeTexture] || { x: 0, y: 0 };
    const mouthOffsetFix = faceOffsetFix[mouthTexture] || { x: 0, y: 0 };

    const classes = useStyles(eyeOffsetFix, mouthOffsetFix);
    const defaultHandler = idx => {
        const action = {
            type: "update",
            key: "model",
            value: {},
        };
        if (["eye", "both"].includes(facePart)) {
            action.value.eyeIdx = idx;
        }
        if (["mouth", "both"].includes(facePart)) {
            action.value.mouthIdx = idx;
        }
        dispatch(action);
    };

    const setIdx = event => {
        const idx = event.currentTarget.dataset.value;
        const handler = handleSelect || defaultHandler;
        handler(idx);
        closeModal();
    };

    const indexes = Array(9)
        .fill()
        .map((_, i) => i + 1);

    let faces;
    const commonProps = {
        classes,
        eyeTexture,
        mouthTexture,
    };
    switch (facePart) {
        case "eye":
            faces = indexes.map(idx => (
                <div key={idx} onClick={setIdx} data-value={idx}>
                    <FaceBox
                        eyeIdx={idx}
                        mouthIdx={mouthIdx}
                        {...commonProps}
                    />
                </div>
            ));
            break;
        case "mouth":
            faces = indexes.map(idx => (
                <div key={idx} onClick={setIdx} data-value={idx}>
                    <FaceBox eyeIdx={eyeIdx} mouthIdx={idx} {...commonProps} />
                </div>
            ));
            break;
        default:
            faces = indexes.map(idx => (
                <div key={idx} onClick={setIdx} data-value={idx}>
                    <FaceBox eyeIdx={idx} mouthIdx={idx} {...commonProps} />
                </div>
            ));
    }

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={closeModal}>{titles[mode]}</DialogTitle>
                <Suspense fallback={null}>
                    {mode === "face" && (
                        <FacePartSelector
                            value={facePart}
                            onClick={setFacePart}
                        />
                    )}
                </Suspense>
            </DialogTop>
            <DialogContent dividers className={classes.root}>
                {faces}
                {mode !== "face" && (
                    <Button onClick={setIdx} data-value="">
                        Remove
                    </Button>
                )}
            </DialogContent>
        </>
    );
}

export default FaceSelect;
