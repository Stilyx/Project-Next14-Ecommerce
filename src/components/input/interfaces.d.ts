export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: string;
  inputId: string;
  inputText: string;
  errorText?: string;
  className?: string;
}
