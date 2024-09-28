"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

interface OptionProps {
  children: ReactNode;
  value: string;
}

interface SelectProps {
  children: ReactNode;
  selectedValue: string;
  onChange: (value: string) => void;
}

interface SelectContextType {
  selectedValue: string;
  onChange: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

const Option: React.FC<OptionProps> = ({ children, value }) => {
  const context = useContext<SelectContextType | undefined>(SelectContext);

  if (!context) {
    throw new Error("Option must be used within a Select");
  }

  const { selectedValue, onChange } = context;
  const isSelected = selectedValue === value;

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => onChange(value)}
    >
      {isSelected ? (
        <FiCheckCircle className="text-success w-6 h-6 text-primary" />
      ) : (
        <FiCircle className="text-success w-6 h-6 text-muted-foreground" />
      )}
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
};

const Select: React.FC<SelectProps> = ({
  children,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full py-2">
      <SelectContext.Provider value={{ selectedValue, onChange }}>
        {children}
      </SelectContext.Provider>
    </div>
  );
};

export { Select, Option };
