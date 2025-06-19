# Weather Dashboard

A modern, responsive weather application built with React that provides real-time weather information with dynamic visual effects and smooth animations.

## Features

### Core Functionality
- **Real-time Weather Data**: Search for current weather conditions by city name or ZIP code
- **Interactive Search**: Search using either button click or Enter key press
- **Dynamic Visual Effects**: Background changes based on weather conditions (sunny, cloudy, rainy, snowy)
- **Smooth Animations**: Elegant expand-down animation when displaying weather results
- **Loading States**: User-friendly loading indicators during data fetching

### Visual Design
- **Responsive Layout**: Fluid container that adapts to content and screen sizes
- **Glass Morphism Effects**: Modern backdrop blur effects throughout the interface
- **Weather-Specific Styling**: 
  - Sunny conditions trigger yellow box shadows
  - Rain conditions include animated falling raindrops
  - Dynamic color schemes for different weather types
- **Hover Effects**: Interactive button and input animations

### User Experience
- **Progressive Disclosure**: Weather section only appears after search submission
- **Consistent Spacing**: 20px gaps maintained between sections when content is visible
- **Accessibility**: Proper alt text for weather icons and semantic HTML structure
- **Cross-Platform**: Works seamlessly across different devices and browsers

## Technology Stack

- **Frontend Framework**: React 19.0.0
- **Styling**: Custom CSS with advanced animations and transitions
- **Weather API**: Integration with weather data service
- **Build Tool**: Create React App
- **Package Manager**: npm

## Project Structure

```
weather_dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js                 # Main component with weather logic
│   ├── index.js              # Application entry point
│   ├── index.css             # Base styles
│   ├── style.css             # Main stylesheet with animations
│   └── components/
│       ├── GetForecast.js    # Weather API integration
│       └── UseFetch.js       # Custom fetch hook
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather_dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application

## Available Scripts

### `npm start`
Runs the app in development mode with hot reloading enabled.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production with optimized performance.

### `npm run eject`
Ejects from Create React App (irreversible operation).

## Usage

1. **Search for Weather**: Enter a city name or ZIP code in the search field
2. **Submit Search**: Click the "Search" button or press Enter
3. **View Results**: Watch the weather section animate into view with current conditions
4. **Experience Effects**: Observe dynamic background changes based on weather conditions

## API Integration

The application integrates with a weather API service to fetch real-time weather data including:
- Current temperature (Fahrenheit)
- Weather conditions and descriptions
- Location information (city, region)
- Weather icons
- Humidity levels

## Customization

### Weather Conditions
The application supports various weather condition styling:
- **Sunny**: Yellow glowing box shadows
- **Cloudy**: Gray background tinting
- **Rainy**: Animated rain effects with dark stormy background
- **Snowy**: Red background tinting (customizable)

### Animation Timing
Animation durations and easing can be modified in the CSS:
- Weather section expansion: 0.5s cubic-bezier transition
- Box shadow transitions: 1s ease
- Rain animation: Variable timing for realistic effect

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions about this project, please reach out through the portfolio link in the application.
