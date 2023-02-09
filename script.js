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
  const [state, setState] = React.useState({ nil: [], xIsNext: true, msg: '' });

  function handleClick(i) {
    var arr = state.nil.slice();
    if (!arr[i]) {
      arr[i] = state.xIsNext ? 'X' : 'O';
      var newMsg = state.xIsNext ? 'Next = O' : 'Next = X';
      setState({ nil: arr, xIsNext: !state.xIsNext, msg: newMsg });
    }
  }

  function peg(i) {
    return <Kotak value={state.nil[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <div>
      <h4 className="text-xl font-semibold">{state.msg}</h4>
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
      <Papan />
    </div>
  );
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game value="Mulai Baru" />);
