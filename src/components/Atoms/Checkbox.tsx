type CheckboxFieldProps = {
    label: string;
    id: string;
  };
  
  const CheckboxField = ({ label }: CheckboxFieldProps) => {
    const checkbox_options = ["Romance", "Adventure", "Fantasy", "Sci-fi"];
    return (
      <div className="checkbox_wrapper">
        <label>{label}</label>
        {checkbox_options.map((genre, index) => (
          <div key={index} className="checkbox_item">
            <input type="checkbox" id={genre} name={genre} />
            <label htmlFor={genre}>{genre}</label>
          </div>
        ))}
      </div>
    );
  };
  
  export default CheckboxField;
  