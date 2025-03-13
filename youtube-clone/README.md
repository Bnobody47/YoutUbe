# YouTube Clone

A modern YouTube clone built with React, TypeScript, and Vite. This application replicates core YouTube functionalities with a clean, responsive interface.

![YouTube Clone](./public/preview.png)

## 🌟 Features

- **Video Browsing**: Browse videos with infinite scroll functionality
- **Category Filtering**: Filter videos by different categories (Home, Music, Sports, Gaming, etc.)
- **Search**: Search for videos using YouTube's search functionality
- **Video Playback**: Watch videos with a custom video player
- **Channel Pages**: View channel information, videos, and playlists
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Modern UI**: Clean and modern interface using Bootstrap and Tailwind CSS

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: 
  - Bootstrap 5
  - Tailwind CSS
  - React Icons
- **Data Fetching**: Axios
- **Infinite Scroll**: react-infinite-scroll-component

## 🚀 Getting Started

### Prerequisites

- Node.js (version >= 18)
- npm or yarn
- YouTube Data API key

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a \`.env\` file in the root directory and add your YouTube API key:
\`\`\`env
VITE_YOUTUBE_API_KEY=your_api_key_here
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at \`http://localhost:3000\`

## 🏗️ Build

To build the application for production:

\`\`\`bash
npm run build
\`\`\`

To preview the production build:

\`\`\`bash
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
youtube-clone/
├── src/
│   ├── Components/     # Reusable UI components
│   ├── Pages/         # Page components
│   ├── Hooks/         # Custom React hooks
│   ├── utils/         # Utility functions and API calls
│   └── types/         # TypeScript type definitions
├── public/           # Static assets
└── package.json     # Project dependencies and scripts
\`\`\`

## 📱 Pages and Features

### Home Page (/)
- Video grid layout
- Category-based filtering
- Infinite scroll for continuous loading

### Watch Page (/watch/:videoId/:channelId)
- Video playback
- Video details and description
- Channel information
- Related videos

### Channel Page (/channel/:channelId)
- Channel information and statistics
- Channel videos
- Channel playlists
- Tabbed interface for different content types

### Search Page (/search)
- Search results with infinite scroll
- Video and channel results
- Filter and sort options

### Playlist Page (/playlist/:channelId/:playlistId)
- Playlist videos
- Playlist information
- Auto-play functionality

## 🔧 Configuration

The project uses the following main configuration files:

- \`vite.config.ts\`: Vite configuration
- \`vercel.json\`: Vercel deployment configuration
- \`tsconfig.json\`: TypeScript configuration
- \`.npmrc\`: NPM configuration

## 🚀 Deployment

This project is configured for deployment on Vercel. The production build includes:

- Optimized asset bundling
- Route handling for SPA
- Environment variable management
- TypeScript compilation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📞 Contact

Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/youtube-clone](https://github.com/your-username/youtube-clone)
