export function applyTheme(shadowRoot, theme) {
    const style = document.createElement('style');
    style.textContent = `
    :host {
      --primary-color: ${theme.primaryColor || '#000'};
      --background-color: ${theme.backgroundColor || '#fff'};
      --font-family: ${theme.fontFamily || 'Arial, sans-serif'};
    }
  `;
    shadowRoot.appendChild(style);
}