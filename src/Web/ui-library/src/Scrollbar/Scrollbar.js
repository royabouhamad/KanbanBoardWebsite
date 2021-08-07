import React from "react";
import Scrollbars from "react-custom-scrollbars";

export default function Scrollbar({ children, width, height }) {
    return <Scrollbars style={{ width, height }}>{children}</Scrollbars>;
}