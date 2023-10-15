"use server";

export async function sendEmail() {
  console.log("send email");
  return {
    from: "from@email.com",
    to: "to@email.com",
    subject: "subject",
    content: "content",
  };
}
