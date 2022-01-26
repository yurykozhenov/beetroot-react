import { FormElementProps } from "../types";
import { withLogger } from "../hocs/withLogger";

function Checkbox({ value, onChange }: FormElementProps<boolean>) {
  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   onChange(e.target.checked);
  //   console.log(e.target.checked);
  // }

  return (
    <>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        // onChange={handleChange}
      />
      <label>Checkbox</label>
    </>
  );
}

export default withLogger(Checkbox);
