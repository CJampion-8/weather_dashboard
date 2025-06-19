# Weather Dashboard

A modern, responsive weather application built with React that provides real-time weather information with dynamic visual effects, smooth animations, and geolocation support.

## Features

### Core Functionality
- **Real-time Weather Data**: Search for current weather conditions by city name or ZIP code
- **Geolocation Support**: Get weather for your current location using GPS coordinates
- **Dual Search Methods**: Manual city search or automatic location detection
- **Interactive Search**: Search using button click, Enter key press, or current location button
- **Dynamic Visual Effects**: Background changes and animations based on weather conditions
- **Smooth Animations**: Elegant expand-down animation when displaying weather results
- **Loading States**: User-friendly loading indicators during data fetching

### Enhanced Weather Display
- **Current Temperature**: Displays temperature in Fahrenheit
- **Weather Conditions**: Shows detailed weather description with icons
- **Humidity Information**: Displays current humidity percentage with styled labels
- **Location Details**: Shows city name and region information
- **Weather Icons**: Visual weather condition indicators from API

### Visual Design & Animations
- **Responsive Layout**: Fluid container that adapts to content and screen sizes
- **Glass Morphism Effects**: Modern backdrop blur effects throughout the interface
- **Weather-Specific Styling**: 
  - **Sunny conditions**: Yellow glowing box shadows and warm gradient backgrounds
  - **Rainy conditions**: Animated falling raindrops with dark stormy backgrounds
  - **Cloudy conditions**: Cool overcast gradient backgrounds
  - **Snowy conditions**: Winter-themed light blue gradients
- **Smooth Background Transitions**: 2-second animated transitions between weather themes
- **Interactive Elements**: Hover effects on buttons and inputs with smooth animations

### User Experience
- **Progressive Disclosure**: Weather section only appears after successful search
- **Consistent Spacing**: Maintained 20px gaps between sections when content is visible
- **Input Validation**: Prevents empty searches and provides user feedback
- **Error Handling**: Graceful handling of location errors and API failures
- **Accessibility**: Proper alt text for weather icons and semantic HTML structure
- **Cross-Platform**: Works seamlessly across different devices and browsers
- **Portfolio Integration**: Fixed-position link to developer's other projects

## Technology Stack

- **Frontend Framework**: React 19.0.0
- **Styling**: Custom CSS with advanced animations and transitions
- **Weather API**: Integration with weather data service supporting both city and coordinate queries
- **Geolocation API**: Browser-based location detection
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
│   ├── App.js                     # Main component with weather logic and UI
│   ├── index.js                   # Application entry point
│   ├── index.css                  # Base styles
│   ├── style.css                  # Main stylesheet with animations
│   └── components/
│       ├── getForecast.js         # Weather API integration (city & coordinates)
│       ├── useFetch.js            # Custom fetch hook for API calls
│       └── useGeoLocation.js      # Geolocation hook for current position
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Modern browser with geolocation support (optional)

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

### Manual Search
1. **Enter Location**: Type a city name or ZIP code in the search field
2. **Submit Search**: Click the "Search" button or press Enter
3. **View Results**: Watch the weather section animate into view with current conditions

### Current Location
1. **Enable Location**: Allow browser location access when prompted
2. **Use Current Location**: Click the "Use Current Location" button
3. **Automatic Detection**: Weather data loads based on your GPS coordinates

### Visual Experience
- **Dynamic Backgrounds**: Observe automatic background changes based on weather conditions
- **Animated Effects**: Enjoy falling raindrops during rainy weather
- **Smooth Transitions**: Experience fluid animations between different weather states

## API Integration

The application integrates with a weather API service supporting both location types:

### City/ZIP Code Queries
- Current temperature and conditions
- Weather descriptions and icons
- Humidity levels
- Location information

### Coordinate-Based Queries
- Latitude/longitude support
- Same data points as city searches
- Automatic location formatting

## Customization

### Weather Condition Themes
- **Sunny**: Warm yellow/orange gradients with glowing shadows
- **Rainy**: Dark stormy gradients with animated SVG raindrops
- **Cloudy**: Cool blue-gray overcast gradients
- **Snowy**: Light winter blue gradients

### Animation Timing
All transitions can be customized in CSS:
- Weather section expansion: 0.5s cubic-bezier transition
- Background transitions: 2s ease-in-out
- Rain animation: Variable timing for realistic effect
- Box shadow transitions: 1s ease

### Responsive Breakpoints
- Mobile (max-width: 480px)
- Tablet (max-width: 768px)
- Desktop (768px+)

## Browser Support & Requirements

### Supported Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Optional Features
- **Geolocation API**: For current location functionality
- **CSS Grid/Flexbox**: For responsive layouts
- **CSS Animations**: For smooth transitions

## Error Handling

The application gracefully handles various error scenarios:
- **Network connectivity issues**
- **Invalid city/ZIP code entries**
- **Geolocation permission denied**
- **API service unavailable**
- **Browser compatibility issues**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across different browsers
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions about this project, please reach out through the portfolio link in the application.
