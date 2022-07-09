export default function Tabuleiro(props) {
  return <div className="item">{tabuleiroCompleto()}</div>;
}

function gerar1() {
  const quadrados = [];

  for (let i = 1; i <= 8; i++) {
    i % 2 == 0
      ? quadrados.push(<div className="square"></div>)
      : quadrados.push(<div className="square2"></div>);
  }

  return quadrados;
}

function gerar2() {
  const quadrados = [];

  for (let i = 1; i <= 8; i++) {
    i % 2 == 0
      ? quadrados.push(<div className="square2"></div>)
      : quadrados.push(<div className="square"></div>);
  }

  return quadrados;
}

function tabuleiroCompleto() {
    const tabuleiroPronto = [];
    for (let i = 1; i <= 4; i++) {
      tabuleiroPronto.push(
        <div className="fileira">{gerar1()}</div>,
        <div className="fileira">{gerar2()}</div>
      );
    }

    return tabuleiroPronto;
  }