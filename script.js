function Kotak(props) {
  function handleClick() {
    alert('Kotak');
  }

  return (
    <button
      className="border w-20 h-20 text-6xl"
      onClick={props.onClick ? props.onClick : handleClick}
    >
      {props.value}
    </button>
  );
}

function Papan(props) {
  function handleClick() {
    alert('Papan');
  }

  function peg(i) {
    return (
      <Kotak value={i} onClick={props.onClick ? props.onClick : handleClick} />
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        {peg(0)}
        {peg(1)}
        {peg(2)}
      </div>
      <div className="flex justify-center">
        {peg(3)}
        {peg(4)}
        {peg(5)}
      </div>
      <div className="flex justify-center">
        {peg(6)}
        {peg(7)}
        {peg(8)}
      </div>
    </div>
  );
}

function Game(props) {
  function handleClick() {
    alert('Game');
  }

  return (
    <div>
      <h4 className="text-xl font-semibold">{props.value}</h4>
      <Papan />
    </div>
  );
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game value="Mulai Baru" />);
