import styled from "styled-components";

interface InputProps {
  noBorder?: true;
}

const Input = styled.input<InputProps>(({ theme, ...props }) => ({
  fontFamily: theme.fontFamily.content,
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize(1),
  border: props.noBorder
    ? `1px solid transparent`
    : `1px solid ${theme.palette.neutral[30]}`,
  padding: `${theme.fontSize(1 / 12, true)} ${theme.fontSize(1 / 8, true)}`
}));

export default Input;
