export default function dom() {
  let username = "Piseth-Pon"
  let email = "ponpiseth8@gmail.com"
  let joinedYear = 2022

  const profile = document.querySelector(".profile")
  profile.innerHTML = `
    <img src="./profile.png" alt="">
    <h2>Username: ${username}</h2>
    <h2>Email: ${email}</h2>
    <h2>Joined: ${joinedYear}</h2>
  `
}