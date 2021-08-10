import React from "react";
import { useDispatch } from "react-redux";
import {
    Button,
    Label,
    PanelActions,
    PanelDialog,
    PanelHeading,
    PanelRow,
    Text,
    TextInput
} from "@kanban/ui-library";
import { addBoardSection, updateBoardSectionName } from "../../../features/boardSections/boardSectionsSlice";

export default function AddBoardDialog({ open, onClose, boardSections, isEditMode, section }) {
    const [boardName, setBoardName] = React.useState("");
    const dispatch = useDispatch();

    React.useEffect(() => {
        setBoardName(section.name ?? "");
    }, [section]);

    const handleSave = () => {
        if (isEditMode) {
            dispatch(updateBoardSectionName({
                id: section.id,
                name: boardName,
            }));

            handleClose();
            return;
        }

        dispatch(addBoardSection({
            id: `${parseInt(boardSections[boardSections.length-1].id) + 1}`,
            name: boardName,
            sectionPosition: boardSections.length + 1,
        }));

        handleClose();
    }

    const handleClose = () => {
        setBoardName("");
        onClose();
    }

    return (
        <PanelDialog open={open} onClose={handleClose}>
            <PanelHeading>Add board section</PanelHeading>

            <PanelRow>
                <Label label={<Text>Name</Text>}>
                    <TextInput
                        value={boardName}
                        onChange={(e) => setBoardName(e.target.value)}
                    />
                </Label>
            </PanelRow>

            <PanelActions>
                <Button small variant="outlined" onClick={handleClose}>
                    Cancel
                </Button>

                <Button 
                    small 
                    disabled={isEditMode ? boardName===section.name : boardName===""} 
                    onClick={handleSave}
                >
                    
                    {`${isEditMode ? "Update" : "Add"} board`}
                </Button>
            </PanelActions>
        </PanelDialog>
    )
}