import { useDark, usePreferredDark, useToggle } from '@vueuse/core'

export const preferredDark = usePreferredDark()
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
