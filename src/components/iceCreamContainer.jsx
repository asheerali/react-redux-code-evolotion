import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "./redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCreams</button>
    </div>
  );
}

export default IceCreamContainer;

// import React from "react";
// import { connect } from "react-redux";
// import { buyIceCream } from "./redux";

// function IceCreamContainer(props) {
//   return (
//     <div>
//       <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
//       <button onClick={props.buyIceCream}>Buy IceCream</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     numOfIceCreams: state.iceCream.numOfIceCreams,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
