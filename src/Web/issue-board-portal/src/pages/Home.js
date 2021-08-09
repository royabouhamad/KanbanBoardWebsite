import React from "react";
import { useSelector } from 'react-redux'
import {
    Content,
    Root,
    Scrollbar,
    Section,
    SectionBody,
    SectionHeader,
    Text,
    Ticket
} from "@kanban/ui-library"; 

export default function Home() {
    const boardSections = useSelector(state => state.boardSections.sections);
    const tickets = useSelector(state => state.tickets.tickets);

    return (
        <Root>
            <Content>
                {boardSections.map(section => {
                    return (
                        <Section boards={boardSections.length}>
                            <SectionHeader>
                                <Text bold>{section.name}</Text>
                            </SectionHeader>
                            
                            
                            <SectionBody>
                                {tickets.filter(ticket => ticket.boardSectionId === section.id).map(ticket => {
                                    return (
                                        <Ticket backgroundColor="#f58569">
                                            <Text>{ticket.name}</Text>
                                            <Text small>{ticket.description}</Text>
                                        </Ticket>
                                    );
                                })}
                            </SectionBody>
                        </Section>
                    )
                })}
            </Content>
        </Root>
    );
}