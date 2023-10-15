"use client";

import { sendEmail } from "./actions";

export function ContactForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // sendEmail().then((response) => console.log(response));
    // console.log("submit");
    const response = await sendEmail();
    console.log(response);
    alert("메일이 전송되었습니다!");
    return false;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="border w-full p-2"
          placeholder="문의할 내용"
        />
      </div>
      <div>
        <input
          type="text"
          className="border w-full p-2"
          placeholder="문의할 내용"
        />
      </div>
      <div>
        <button>전송</button>
      </div>
    </form>
  );
}
