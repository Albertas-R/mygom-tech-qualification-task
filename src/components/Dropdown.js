import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIconFa, ChevronUpIconFa, CheckIconFa } from "./Icons";

function Dropdown({ title, items, multiselect = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  const containerRef = useRef();

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      console.log(event.target);

      if (!containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleCloseDropdown);

    return () => document.removeEventListener("mousedown", handleCloseDropdown);
  }, []);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item]);
      } else if (multiselect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionCopy = [...selection];
      selectionCopy = selectionCopy.filter((current) => current.id !== item.id);
      setSelection([...selectionCopy]);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <div className="dropdown-container" ref={containerRef}>
      <div className="dropdown-header" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <div className="dropdown-header-title">{title}</div>

        <div className="dropdown-header-action">
          {isOpen ? <ChevronUpIconFa /> : <ChevronDownIconFa />}
        </div>
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li className="dropdown-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.username}</span>
                <span>{isItemInSelection(item) && <CheckIconFa />}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
