export default function GetRatedComponent(LowRateComponent, HighRateComponent) {
  function Blanc(props) {
    return <div>{props.children}</div>;
  }

  return function (rating) {        
    if (rating < 100) {
      return LowRateComponent;
    }
    if (rating > 1000) {
      return HighRateComponent;
    }
    return Blanc;
  }
}