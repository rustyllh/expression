import { describe, expect, it } from 'vitest'
import { getThemeTransitionCircle } from '../../.vitepress/theme/themeTransition'

describe('getThemeTransitionCircle', () => {
    it('converts the trigger center and viewport radius to device pixels', () => {
        expect(
            getThemeTransitionCircle({ left: 700, top: 20, width: 40, height: 24 }, { width: 1024, height: 768 }, 2)
        ).toEqual({
            x: 1440,
            y: 64,
            endRadius: Math.hypot(1440, 1472)
        })
    })
})
