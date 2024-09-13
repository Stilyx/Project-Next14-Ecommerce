export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderText: string;
  inputType: string;
  inputId: string;
  inputText: string;
  error: boolean;
  errorText: string;
}
