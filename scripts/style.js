// Create a new stylesheet
const style = document.createElement('style');
style.type = 'text/css';
document.head.appendChild(style);

// Add CSS rules
style.sheet.insertRule(`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`);

style.sheet.insertRule(`
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-100%) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
`);

style.sheet.insertRule(`
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(200px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`);

const variables = `
  :root {
    --primary-color: #000;
    --secondary-color: #cbc7c7;
    --accent-color: #ffc107;
    --tertiary-color: #fff;
    --spacing-unit: 1rem;
    --border-radius: 10px;
    --transition-duration: 0.3s;
    --body-font : "Roboto", serif;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: var(--body-font);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
  }
`;

style.sheet.insertRule(variables);

style.sheet.insertRule(`
  h1, h2, h3, p {
    margin-bottom: var(--spacing-unit);
  }
`);

// Example of a rule for the header
style.sheet.insertRule(`
  header {
    color: var(--accent-color);
    background: var(--primary-color);
    padding: var(--spacing-unit);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`);

// Add more CSS rules similarly as required
// You can add the remaining styles based on your CSS

console.log('Stylesheet created successfully!');
