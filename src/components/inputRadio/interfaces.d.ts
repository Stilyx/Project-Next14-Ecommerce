export interface IRadioInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  optionName: string;
  radioId: string;
  inputValue: string;
}
