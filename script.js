function Kotak(props) {
  function handleClick() {
    alert('Kotak');
  }

  return (
    <button onClick={props.onClick ? props.onClick : handleClick}>
      {props.value}
    </button>
  );
}

function Papan(props) {
  function handleClick() {
    alert('Papan');
  }

  return (
    <Kotak
      value={props.value}
      onClick={props.onClick ? props.onClick : handleClick}
    />
  );
}

function Game(props) {
  function handleClick() {
    alert('Game');
  }

  return (
    <Papan
      value={props.value}
      onClick={props.onClick ? props.onClick : handleClick}
    />
  );
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game value="Baru" />);
