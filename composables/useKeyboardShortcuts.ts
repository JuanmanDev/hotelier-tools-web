export const useKeyboardShortcuts = () => {
  const { openSearch } = useSearch()

  const handleKeydown = (event: KeyboardEvent) => {
    // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault()
      openSearch()
    }
    
    // Check for / key when no input is focused
    if (event.key === '/' && !isInputFocused()) {
      event.preventDefault()
      openSearch()
    }
  }

  const isInputFocused = (): boolean => {
    const activeElement = document.activeElement
    if (!activeElement) return false
    
    const inputTags = ['INPUT', 'TEXTAREA', 'SELECT']
    return (
      inputTags.includes(activeElement.tagName) ||
      activeElement.getAttribute('contenteditable') === 'true'
    )
  }

  const initializeShortcuts = () => {
    if (process.client) {
      document.addEventListener('keydown', handleKeydown)
    }
  }

  const cleanupShortcuts = () => {
    if (process.client) {
      document.removeEventListener('keydown', handleKeydown)
    }
  }

  return {
    initializeShortcuts,
    cleanupShortcuts
  }
}