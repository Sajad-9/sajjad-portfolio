/** @type { import('@storybook/react-webpack5').Preview } */
import "../src/styles/index.css"; // ✅ Make sure this path matches your Tailwind CSS file

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
