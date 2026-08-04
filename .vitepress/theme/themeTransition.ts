interface Rect {
    left: number
    top: number
    width: number
    height: number
}

interface Viewport {
    width: number
    height: number
}

export function getThemeTransitionCircle(rect: Rect, viewport: Viewport, devicePixelRatio: number) {
    const scale = Math.max(devicePixelRatio, 1)
    const x = (rect.left + rect.width / 2) * scale
    const y = (rect.top + rect.height / 2) * scale
    const width = viewport.width * scale
    const height = viewport.height * scale

    return {
        x,
        y,
        endRadius: Math.hypot(Math.max(x, width - x), Math.max(y, height - y))
    }
}
