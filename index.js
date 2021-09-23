function blurring(root){
    const [$bg, $loadingText] = root.children
    let percentProgress = 0

    const interval = setInterval(() => {
        percentProgress < 99 ? percentProgress++ : clearInterval(interval)

        $loadingText.innerText = `${percentProgress}%`
        $loadingText.style.opacity = scale(percentProgress, 0, 100, 1, 0)
        $bg.style.filter = `blur(${scale(percentProgress, 0, 100, 30, 0)}px)`
    }, 60)

    const scale = (num, inMin, inMax, outMin, outMax) => {
        return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
    }
}

blurring(document.querySelector('.app'))