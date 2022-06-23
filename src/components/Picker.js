export default function Picker(props) {
  return (
    <div>
      <label>
        Search:<br></br>
        <input type="search"></input>
      </label>
      <fieldset>
        {props.items.map((item) => {
          return (
            <label key={item.id}>
              <input
                type="radio"
                name="facility"
                value={item.name}
                onChange={() => props.onPick(item.id)}
                checked={props.selectedId === item.id}
              ></input>
              {item.name}
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}
