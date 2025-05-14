import { db } from "../firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  try {
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      message,
      timestamp: new Date()
    });
    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to send message. Please try again.");
  }
});
