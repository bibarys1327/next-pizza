import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="a01987f77819473622f9c95bc009bd5ea083c57d"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
