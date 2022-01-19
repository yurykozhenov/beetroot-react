interface SearchProps {
   value: string;
   checkChange: (value: string) => unknown;
}

export default function Search({value, checkChange}: SearchProps) {
    function handleChange(e: any) {
       checkChange(e.target.value)
       console.log(value);
    }
    
    return (
          <div className="search-by-name">
             <label htmlFor="search">
                Enter a name:
             </label>
                <input type="text" value={value} name="search"
                onInput={e => handleChange(e)} className="search" placeholder="Name"/>
          </div>
       )
  }
  
//   Search.propTypes = {
//     value: PropTypes.string.isRequired,
//     checkChange: PropTypes.func.isRequired
//   }
  