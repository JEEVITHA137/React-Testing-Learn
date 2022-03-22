import { Button } from 'react-bootstrap';

export default function Input({symbol, currentSymbol, currentSymbolChange, answer, clear }) {
  const isAnswerSymbol = symbol === "=";
  const isClearButton = symbol === "Clear";
  return (
      <Button value={symbol} variant={isClearButton ? "primary" : symbol === currentSymbol ? "success" :"dark"} onClick={(e)=> isAnswerSymbol ?  answer() : (isClearButton ? clear(): currentSymbolChange(e.target.value))}>{symbol}</Button>    
  );
}