function Kotak(props) {
  function handleClick() {
    alert('Kotak makasaan');
  }

  return <button onClick={props.onClick}>{props.value}</button>;
}

function Papan(props) {
  function handleClick() {
    alert('Papan sa');
  }

  return <Kotak value="papan" onClick={handleClick} />;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Papan value="papan" />);
