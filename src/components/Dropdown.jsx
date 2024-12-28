import React, { useState } from "react";
import useClickOutside from "./useClickOutside";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const closeDropdown = () => setIsOpen(false);

    const ref = useClickOutside(closeDropdown);

    return (
        <div>
            <button onClick={toggleDropdown}>Toggle Dropdown</button>
            {isOpen && (
                <div ref={ref} className="dropdown">
                    <p>Dropdown Content</p>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
