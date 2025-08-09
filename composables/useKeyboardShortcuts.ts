import { useSearch } from './useSearch'

export const useKeyboardShortcuts = () => {
  const { openSearch, closeSearch, isSearchOpen } = useSearch()

  const handleKeydown = (event: KeyboardEvent) => {
    // If search modal is open, ignore global shortcuts except Escape
    if (isSearchOpen.value) {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeSearch()
      }
      return
    }

    // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault()
      openSearch()
      return
    }
    
    // Check for / key when no input is focused
    if (event.key === '/' && !isInputFocused()) {
      event.preventDefault()
      openSearch()
      return
    }
  }

  const isInputFocused = (): boolean => {
    const activeElement = document.activeElement as HTMLElement | null
    if (!activeElement) return false
    
    const inputTags = ['INPUT', 'TEXTAREA', 'SELECT']
    return (
      inputTags.includes(activeElement.tagName) ||
      activeElement.getAttribute('contenteditable') === 'true'
    )
  }

  const initializeShortcuts = () => {
    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', handleKeydown)
    }
  }

  const cleanupShortcuts = () => {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keydown', handleKeydown)
    }
  }

  return {
    initializeShortcuts,
    cleanupShortcuts
  }
}