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
    TextInput,
    TextInputMultiline
} from "@kanban/ui-library";
import { addTicket } from "../../../features/tickets/ticketsSlice";

export default function AddTicketDialog({ open, onClose, boardSectionId, tickets}) {
    const [ticketName, setTicketName] = React.useState("");
    const [ticketDescription, setTicketDescription] = React.useState("");
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addTicket({
            id: `${parseInt(tickets[tickets.length-1].id) + 1}`,
            boardSectionId: boardSectionId,
            name: ticketName,
            description: ticketDescription,
            sectionPosition: tickets.filter(ticket => ticket.boardSectionId === boardSectionId).length + 1,
        }));

        handleClose();
    }

    const handleClose = () => {
        setTicketName("");
        setTicketDescription("");
        onClose();
    }

    return (
        <PanelDialog open={open} onClose={handleClose}>
            <PanelHeading>Add ticket</PanelHeading>

            <PanelRow>
                <Label label={<Text>Name*</Text>}>
                    <TextInput
                        value={ticketName}
                        onChange={(e) => setTicketName(e.target.value)}
                    />
                </Label>
            </PanelRow>

            <PanelRow>
                <Label label={<Text>Description</Text>}>
                    <TextInputMultiline
                        value={ticketDescription}
                        onChange={(e) => setTicketDescription(e.target.value)}
                    />
                </Label>
            </PanelRow>

            <PanelActions>
                <Button small variant="outlined" onClick={handleClose}>
                    Cancel
                </Button>

                <Button small disabled={ticketName===""} onClick={handleSave}>
                    Add ticket
                </Button>
            </PanelActions>
        </PanelDialog>
    )
}