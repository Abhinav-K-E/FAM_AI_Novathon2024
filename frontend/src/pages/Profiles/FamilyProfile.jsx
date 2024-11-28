import React, { useState } from "react";
import "./FamilyProfilePage.scss";
import Nav from "../../components/Nav/Nav";

import BOY from "../../assets/images/male.svg";
import GIRL from "../../assets/images/female.svg";
import Form from "../../components/form/Form";
import { AnimatePresence } from "motion/react";

const FamilyProfile = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="family-page">
      <Nav />
      <div className="fam-profiles">
        <div className="profile-card">
          <div className="left-profile-box">
            <div className="name">John doe</div>
            <div className="dob">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={21}
                fill="none"
              >
                <path
                  fill="#303030"
                  d="M6.667 5.292a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M13.333 5.292a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M7.083 12.583a.8.8 0 0 1-.316-.066.9.9 0 0 1-.275-.175.86.86 0 0 1-.242-.592.8.8 0 0 1 .067-.317q.062-.15.175-.275a.9.9 0 0 1 .275-.175.85.85 0 0 1 .908.175c.15.159.242.375.242.592 0 .05-.009.108-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.067.083-.1.125a.88.88 0 0 1-.592.241M10 12.583a.8.8 0 0 1-.317-.066.9.9 0 0 1-.275-.175.86.86 0 0 1-.241-.592.8.8 0 0 1 .066-.317q.063-.15.175-.275a.9.9 0 0 1 .275-.175.84.84 0 0 1 .909.175c.15.159.241.375.241.592q-.002.077-.016.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.067.083-.1.125a.88.88 0 0 1-.592.241M12.917 12.583a.8.8 0 0 1-.317-.066.9.9 0 0 1-.275-.175l-.1-.125a.6.6 0 0 1-.075-.15.5.5 0 0 1-.05-.15 1 1 0 0 1-.017-.167c0-.217.092-.433.242-.592a.9.9 0 0 1 .275-.175.83.83 0 0 1 .908.175c.15.159.242.375.242.592q-.002.077-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.066.083-.1.125a.88.88 0 0 1-.591.241M7.083 15.5a.8.8 0 0 1-.316-.067 1 1 0 0 1-.275-.175.88.88 0 0 1-.242-.591.8.8 0 0 1 .067-.317q.062-.162.175-.275c.308-.308.875-.308 1.183 0 .15.158.242.375.242.592a.88.88 0 0 1-.242.591.88.88 0 0 1-.592.242M10 15.5a.88.88 0 0 1-.592-.242.88.88 0 0 1-.241-.591.8.8 0 0 1 .066-.317q.063-.162.175-.275c.309-.308.875-.308 1.184 0a.8.8 0 0 1 .175.275c.041.1.066.208.066.317a.88.88 0 0 1-.241.591.88.88 0 0 1-.592.242M12.917 15.5a.88.88 0 0 1-.592-.242.8.8 0 0 1-.175-.275.8.8 0 0 1-.067-.316q.002-.165.067-.317.063-.162.175-.275a.83.83 0 0 1 .908-.175q.075.025.15.075c.042.025.084.067.125.1.15.158.242.375.242.592a.88.88 0 0 1-.242.591.88.88 0 0 1-.591.242M17.083 8.7H2.917a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h14.166a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
                />
                <path
                  fill="#303030"
                  d="M13.333 19.458H6.667c-3.042 0-4.792-1.75-4.792-4.791V7.583c0-3.041 1.75-4.791 4.792-4.791h6.666c3.042 0 4.792 1.75 4.792 4.791v7.084c0 3.041-1.75 4.791-4.792 4.791M6.667 4.042c-2.384 0-3.542 1.158-3.542 3.541v7.084c0 2.383 1.158 3.541 3.542 3.541h6.666c2.384 0 3.542-1.158 3.542-3.541V7.583c0-2.383-1.158-3.541-3.542-3.541z"
                />
              </svg>
              20/09/24
            </div>
            <div className="data-tabs">
              <div className="tabb">Male</div>
              <div className="tabb">B+ve</div>
            </div>
          </div>
          <img src={BOY} className="avathar"></img>
        </div>
        <div className="profile-card">
          <div className="left-profile-box">
            <div className="name">Angel</div>
            <div className="dob">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={21}
                fill="none"
              >
                <path
                  fill="#303030"
                  d="M6.667 5.292a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M13.333 5.292a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M7.083 12.583a.8.8 0 0 1-.316-.066.9.9 0 0 1-.275-.175.86.86 0 0 1-.242-.592.8.8 0 0 1 .067-.317q.062-.15.175-.275a.9.9 0 0 1 .275-.175.85.85 0 0 1 .908.175c.15.159.242.375.242.592 0 .05-.009.108-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.067.083-.1.125a.88.88 0 0 1-.592.241M10 12.583a.8.8 0 0 1-.317-.066.9.9 0 0 1-.275-.175.86.86 0 0 1-.241-.592.8.8 0 0 1 .066-.317q.063-.15.175-.275a.9.9 0 0 1 .275-.175.84.84 0 0 1 .909.175c.15.159.241.375.241.592q-.002.077-.016.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.067.083-.1.125a.88.88 0 0 1-.592.241M12.917 12.583a.8.8 0 0 1-.317-.066.9.9 0 0 1-.275-.175l-.1-.125a.6.6 0 0 1-.075-.15.5.5 0 0 1-.05-.15 1 1 0 0 1-.017-.167c0-.217.092-.433.242-.592a.9.9 0 0 1 .275-.175.83.83 0 0 1 .908.175c.15.159.242.375.242.592q-.002.077-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.066.083-.1.125a.88.88 0 0 1-.591.241M7.083 15.5a.8.8 0 0 1-.316-.067 1 1 0 0 1-.275-.175.88.88 0 0 1-.242-.591.8.8 0 0 1 .067-.317q.062-.162.175-.275c.308-.308.875-.308 1.183 0 .15.158.242.375.242.592a.88.88 0 0 1-.242.591.88.88 0 0 1-.592.242M10 15.5a.88.88 0 0 1-.592-.242.88.88 0 0 1-.241-.591.8.8 0 0 1 .066-.317q.063-.162.175-.275c.309-.308.875-.308 1.184 0a.8.8 0 0 1 .175.275c.041.1.066.208.066.317a.88.88 0 0 1-.241.591.88.88 0 0 1-.592.242M12.917 15.5a.88.88 0 0 1-.592-.242.8.8 0 0 1-.175-.275.8.8 0 0 1-.067-.316q.002-.165.067-.317.063-.162.175-.275a.83.83 0 0 1 .908-.175q.075.025.15.075c.042.025.084.067.125.1.15.158.242.375.242.592a.88.88 0 0 1-.242.591.88.88 0 0 1-.591.242M17.083 8.7H2.917a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h14.166a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
                />
                <path
                  fill="#303030"
                  d="M13.333 19.458H6.667c-3.042 0-4.792-1.75-4.792-4.791V7.583c0-3.041 1.75-4.791 4.792-4.791h6.666c3.042 0 4.792 1.75 4.792 4.791v7.084c0 3.041-1.75 4.791-4.792 4.791M6.667 4.042c-2.384 0-3.542 1.158-3.542 3.541v7.084c0 2.383 1.158 3.541 3.542 3.541h6.666c2.384 0 3.542-1.158 3.542-3.541V7.583c0-2.383-1.158-3.541-3.542-3.541z"
                />
              </svg>
              20/09/24
            </div>
            <div className="data-tabs">
              <div className="tabb">Female</div>
              <div className="tabb">O+ve</div>
            </div>
          </div>
          <img src={GIRL} className="avathar"></img>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="add-profile-btn"
        onClick={()=>setPopup(!popup)}
        >Add New Member</div>
        <div className="chat-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              fill="#676767"
              d="M9.99 22.78c-.6 0-1.17-.3-1.56-.83l-1.2-1.6c0 .01-.05-.02-.07-.02h-.37c-3.42 0-5.54-.93-5.54-5.54v-4c0-4.21 2.57-5.31 4.73-5.5.24-.03.52-.04.81-.04h6.4c3.62 0 5.54 1.92 5.54 5.54v4c0 .29-.01.57-.05.84-.18 2.13-1.28 4.7-5.49 4.7h-.4l-1.24 1.62c-.39.53-.96.83-1.56.83M6.79 6.75q-.345 0-.66.03c-2.32.2-3.38 1.47-3.38 4.01v4c0 3.43 1.06 4.04 4.04 4.04h.4c.45 0 .96.25 1.24.61l1.2 1.61c.22.3.5.3.72 0l1.2-1.6c.29-.39.75-.62 1.24-.62h.4c2.54 0 3.81-1.07 4-3.35.03-.24.04-.46.04-.69v-4c0-2.79-1.25-4.04-4.04-4.04z"
            />
            <path
              fill="#676767"
              d="M9.99 14.19c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M13.19 14.19c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M6.8 14.19c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            />
            <path
              fill="#676767"
              d="M17.94 16.29c-.2 0-.4-.08-.54-.23a.73.73 0 0 1-.2-.61c.03-.21.04-.43.04-.66v-4c0-2.79-1.25-4.04-4.04-4.04H6.8q-.345 0-.66.03a.76.76 0 0 1-.61-.2.76.76 0 0 1-.23-.6c.18-2.16 1.29-4.73 5.5-4.73h6.4c3.62 0 5.54 1.92 5.54 5.54v4c0 4.21-2.57 5.31-4.73 5.5zM6.92 5.25h6.27c3.62 0 5.54 1.92 5.54 5.54v3.87c1.7-.42 2.5-1.67 2.5-3.87v-4c0-2.79-1.25-4.04-4.04-4.04h-6.4c-2.2 0-3.44.8-3.87 2.5"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>{popup && <Form popup={popup} setPopup={setPopup} />}</AnimatePresence>
    </div>
  );
};

export default FamilyProfile;
