import { FormElementProps, User } from "../types";
import { withLogger } from "../examples/example_hocs/withLogger";

interface SearchWithUserProps extends FormElementProps<string> {
  users: User[];
}

export default function Search(props: SearchWithUserProps) {
  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   onChange(e.target.value);
  //   console.log(e.target.value);
  // }

  // if (value === "AA") {
  //   value = "AAA";
  // }

  console.log(props);

  return (
    <div className="search-by-name">
      <label htmlFor="search">Enter a name:</label>
      <input
        type="text"
        value={props.value}
        name="search"
        onChange={(e) => props.onChange(e.target.value)}
        // onChange={handleChange}
        className="search"
        placeholder="Name"
      />
    </div>
  );
}

export const LeanneSearch = withLogger(Search, (value: string) => {
  if (value === "L") {
    return "Leanne";
  }

  return value;
});

export const ErvinSearch = withLogger(Search, (value: string) => {
  if (value === "E") {
    return "Ervin";
  }

  return value;
});

//   Search.propTypes = {
//     value: PropTypes.string.isRequired,
//     checkChange: PropTypes.func.isRequired
//   }
