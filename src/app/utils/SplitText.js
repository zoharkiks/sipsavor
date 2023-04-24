import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

const initSplitText = () => {
  let ctx = gsap.context(() => {
    let splitWordsWrap = new SplitText(".split-words-wrap", {
      type: "words",
      wordsClass: "single-word",
    });
    const singleWords = document.querySelectorAll(
      ".split-words-wrap .single-word"
    );
    for (let singleWord of singleWords) {
      const wrapper = document.createElement("div");
      wrapper.className = "single-word-inner";

      for (let itemContent of singleWord.childNodes) {
        wrapper.appendChild(itemContent);
      }

      singleWord.appendChild(wrapper);
    }
  });
};

export default initSplitText;
