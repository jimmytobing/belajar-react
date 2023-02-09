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
  const [state, setState] = React.useState({
    nil: [],
    xIsNext: true,
    winner: null,
    msg: 'Mulai Baru',
  });

  function handleClick(i) {
    var arr = state.nil.slice();

    //bila sudah nemu winner, selesai
    //atau kolom sudah berisi, jangan di isi lagi
    if (state.winner || arr[i]) return;

    arr[i] = state.xIsNext ? 'X' : 'O';
    var newMsg = state.xIsNext ? 'Next = O' : 'Next = X';

    //bila sudah nemu pemenang
    var pemenang = calculateWinner(arr);
    if (pemenang) {
      newMsg = 'Pemenangnya ' + pemenang;
    }

    setState({
      nil: arr,
      xIsNext: !state.xIsNext,
      msg: newMsg,
      winner: pemenang,
    });
  }

  function peg(i) {
    return (
      <Kotak
        value={props.nil ? props.nil[i] : state.nil[i]}
        onClick={props.onClick ? props.onClick : () => handleClick(i)}
      />
    );
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
  function handleClick(i) {
    alert('Game ' + i);
  }

  return (
    <div>
      <Papan
        value={props.value ? props.value : null}
        onClick2={props.onClick ? props.onClick : () => handleClick(i)}
      />
    </div>
  );
}

function calculateWinner(arr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //jika a bukan null && a = b && a = c
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a];
    }
  }
  return null;
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game value="Mulai Baru" />);
