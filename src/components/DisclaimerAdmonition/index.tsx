import Admonition from "@theme/Admonition";

export default function DisclaimerAdmonition({ children }) {
  return (
    <Admonition type="danger" title="Disclaimer">
      {children}
    </Admonition>
  );
}
