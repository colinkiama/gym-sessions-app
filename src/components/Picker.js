export default function Picker(props) {
  console.log(props);
  return (
    <div>
      <label>
        Search:<br></br>
        <input type="search"></input>
      </label>
      <fieldset>
        {props.items.map((item) => {
          return (
            <label>
              <input
                key={item.id}
                type="radio"
                name="facility"
                value={item.name}
              ></input>
              {item.name}
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}
