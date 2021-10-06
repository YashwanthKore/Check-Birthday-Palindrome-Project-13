import "./styles.css";
import { useState } from "react";

export default function App() {
  var [dob, setDob] = useState("");
  var outputMessage = document.querySelector("#message-div");

  function dobInputHandler(e) {
    setDob(e.target.value);
    return dob;
  }

  function checkPalindrome() {
    if (dob === "") {
      return "Please select the date";
    } else {
      var arr = [];
      for (let i = 0; i < dob.length; i++) {
        if (dob[i] !== "-") {
          arr.push(Number(dob[i]));
          if (dob[i] === Number) {
            arr[i] = Number(dob[i]);
          }
        }
      }
      var dobOrderArr = [
        arr[arr.length - 2],
        arr[arr.length - 1],
        arr[arr.length - 4],
        arr[arr.length - 3],
        arr[0],
        arr[1],
        arr[2],
        arr[3]
      ];

      var halfLen = dobOrderArr.length / 2;
      console.log(halfLen, dobOrderArr);
      var cnt = 0;
      for (let i = 0; i < halfLen; i++) {
        console.log(dobOrderArr[i], dobOrderArr[dobOrderArr.length - 1 - i]);
        if (dobOrderArr[i] === dobOrderArr[dobOrderArr.length - 1 - i]) {
          cnt++;
        }
      }
      console.log(cnt);
      if (cnt === halfLen) {
        return "Your Birthday is a Palindrome";
      } else {
        return "Your Birthday is not a Palindrome";
      }
    }
  }

  function onClickHandler() {
    outputMessage.innerHTML = checkPalindrome();
  }

  return (
    <div className="App">
      <h1>Palindrome Birthday!</h1>
      <label htmlFor="dob-input">Enter your birthday date:</label>
      <input onChange={dobInputHandler} type="date" />
      <br />
      <button onClick={onClickHandler} id="btn-check">
        Show
      </button>

      <div id="output-div">
        <div id="message-div">
          You can see your birthday is Palindrome or not here...
        </div>
      </div>
    </div>
  );
}
