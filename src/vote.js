export default function vote() {
    const voteBtn = document.querySelector("#voteBtn")
    let votes = 1
    voteBtn.addEventListener("click", () => {
        votes = votes + 1
        voteBtn.textContent = `Votes: ${votes}`
    })
}