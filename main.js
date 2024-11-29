
const modal = document.getElementById("modal")
const mask = document.getElementById("mask")

var info = [
    {
        title: 'Red Apple',
        desc: "An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
    },
    {
        title: 'Green Apple',
        desc: "The fear of apples is called Malusdomesticaphobia. Although apples rank as the second most popular fruit in the US (with bananas taking the top spot), they frequently symbolize antagonists in movies and literature. This association harks back to the biblical tale of Adam and Eve, where the apple was portrayed as the forbidden fruit.",
    }
]

for (let i = 0; i < 2; i++) {
    const img = document.getElementById(`apple-img-${i}`)
    img.addEventListener('click', () => {
        modal.style.display = 'flex'
        document.getElementById("modal-title").innerHTML = info[i].title
        document.getElementById("modal-description").innerHTML = info[i].desc
    })
}

modal.addEventListener('click', () => {
    modal.style.display = 'none'
})
