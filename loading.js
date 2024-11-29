function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apple = document.getElementById("apple")
const intro_states = [
    {
        path: './assets/apple-0.png',
        timing: 1,
    },
    {
        path: './assets/apple-1.png',
        timing: 0.25,
    },
    {
        path: './assets/apple-2.png',
        timing: 0.25,
    },
    {
        path: './assets/apple-3.png',
        timing: 0.25,
    }
]
let cur_img;
async function do_loading(params) {
    for (let i = 0; i<intro_states.length; i++) {
        if (cur_img)
            cur_img.remove()
        const state = intro_states[i]
        if (state.path) {
            const img = document.createElement("img")
            img.src = state.path
            img.alt = `apple-${i}`
            apple.append(img)
            apple.classList.add(`state-${i}`)
            if (i > 0) {
                img.classList.add(`shake`)
            }
            cur_img = img
        }
        await sleep(1000*state.timing);
        apple.classList.remove("shake")
    }
}
do_loading().finally(async () => {
    await sleep(500)
    apple.classList.add('fly-out')
    const load = document.getElementById("loadgroup")
    load.style.display = "flex"
    load.classList.add('fade-in')
    const intervals = []
    let iter = 0
    let done = false
    const jump = async () => {
        while (!done) {
            for (let i = 0; i < 3; i++) {
                const loadgroup = document.getElementById(`apple-loadgroup-${i}`)
                loadgroup.classList.add("apple-loadgroup-anim")
                await sleep(500)
            }
            for (let i = 0; i < 3; i++) {
                const loadgroup = document.getElementById(`apple-loadgroup-${i}`)
                loadgroup.classList.remove("apple-loadgroup-anim")
            }
            await sleep(500)
        }
    }
    jump()
    await sleep(10)
    done = true
    document.getElementById("loading").classList.add("fade-out")
    const main = document.getElementById("main")
    main.classList.add("fade-in", 'active')
    main.style.display = "block"
});