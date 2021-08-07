import React from "react";
import { useSelector } from 'react-redux'
import { Root, Text } from "@kanban/ui-library"; 

export default function Home() {
    const boardSections = useSelector(state => state.boardSections.sections);
    const tickets = useSelector(state => state.tickets.tickets);

    return (
        <Root>
            {boardSections.map(section => {
                return (
                    <div
                        style={{
                            width: `calc(100%/${boardSections.length})`,
                            height: "90%",
                            flexDirection: "column",
                            padding: "10px",
                            margin: "10px",
                            backgroundColor: "#D3D3D3",
                            border: "1px solid #000000",
                            borderRadius: "3px",
                        }}
                    >
                        <Text bold>{section.name}</Text>
                        <hr style={{ width: "100%", color: "#000000" }} />
                        
                        {tickets.filter(ticket => ticket.boardSectionId === section.id).map(ticket => {
                            return (
                                <div 
                                    style={{
                                        flexDirection: "column",
                                        padding: "10px",
                                        marginBottom: "5px",
                                        border: "1px solid #000000",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <Text>{ticket.name}</Text>
                                    <Text small>{ticket.description}</Text>
                                </div>
                            );
                        })}
                    </div>
                )
            })}
        </Root>
    );
}