/** @type { import('@storybook/react-webpack5').Preview } */
import "../src/styles/index.css"; // ✅ Make sure this path matches your Tailwind CSS file
import { ImageZoomProvider } from "../src/context/ImageZoomContext";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ImageZoomProvider>
        <Story />
      </ImageZoomProvider>
    ),
  ],
};

export default preview;
