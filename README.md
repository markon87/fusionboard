# FusionBoard 📊

> A modern, interactive business intelligence dashboard built with React and Syncfusion components

[![Live Demo](https://img.shields.io/badge/Live%20Demo-fusionboardapp.web.app-blue?style=for-the-badge)](https://fusionboardapp.web.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.5-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## 🚀 Live Demo

Experience FusionBoard in action: **[fusionboardapp.web.app](https://fusionboardapp.web.app)**

## 📖 Overview

FusionBoard is a comprehensive business intelligence dashboard that transforms complex data into actionable insights. Built with modern web technologies, it provides an intuitive interface for data exploration, visualization, and analysis.

### ✨ Key Features

- **🔄 Interactive Pivot Table** - Drag-and-drop field configuration with real-time data aggregation
- **📊 Multiple Chart Types** - Line charts, column charts, donut charts, and scatter plots
- **🖱️ Drag & Drop Interface** - Intuitive field reordering and pivot table customization
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🎨 Professional UI** - Clean, modern interface with Syncfusion components
- **⚡ Real-time Updates** - Instant visualization updates as you modify configurations
- **🌙 Dark Sidebar Theme** - Professional appearance with excellent contrast
- **♿ Accessibility** - Keyboard navigation and screen reader support

### 📈 Dashboard Components

1. **Sales Trend Analysis** - Line chart showing performance over time
2. **Regional Comparison** - Column chart for geographic performance analysis  
3. **Category Breakdown** - Donut chart displaying market segment distribution
4. **Income vs Sales Efficiency** - Scatter plot revealing market correlations
5. **Interactive Pivot Table** - Comprehensive cross-tabulation with drill-down capabilities

## 🛠️ Technologies

### Frontend
- **React 19.2.5** - Modern UI library with latest features
- **Vite 8.0.10** - Lightning-fast build tool and development server
- **Syncfusion Components** - Professional data visualization library
- **@dnd-kit** - Modern drag-and-drop functionality
- **React Icons** - Comprehensive icon library

### Deployment
- **Firebase Hosting** - Fast, secure web hosting with global CDN
- **GitHub Actions** - Automated CI/CD pipeline (ready for setup)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Syncfusion license key (free community license available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/markon87/fusionboard.git
   cd fusionboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Syncfusion license key:
   ```env
   VITE_SYNCFUSION_LICENSE_KEY=your_license_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### 🔑 Getting Syncfusion License

1. Visit [Syncfusion Community License](https://www.syncfusion.com/account/manage-license/download)
2. Register for a free community license (for individual developers)
3. Copy your license key to the `.env` file

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Firebase Deployment

### Initial Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init hosting
```

### Deploy to Production
```bash
# Build the app
npm run build

# Deploy to Firebase
firebase deploy
```

Your app will be live at `https://your-project-id.web.app`

## 💡 Usage Guide

### Configuring Pivot Tables
1. **Add Fields**: Use dropdown menus in the sidebar to add fields to different areas
2. **Reorder Fields**: Drag the move icon (≡) to reorder fields within any area
3. **Remove Fields**: Click the × button next to any field to remove it
4. **View Results**: The pivot table updates automatically with your changes

### Chart Interactions
- **Hover** over chart elements for detailed tooltips
- **Legend** items can be toggled to show/hide data series
- **Responsive** - charts automatically resize based on screen size

### Field Areas
- **Rows**: Group data vertically (e.g., Region → City hierarchy)
- **Columns**: Group data horizontally (e.g., Product categories)  
- **Values**: Metrics to calculate (e.g., Sales, Revenue)
- **Filters**: Apply data filters without affecting layout

## 🗂️ Project Structure

```
src/
├── components/
│   ├── FilterPanel.jsx          # Drag-drop field configuration
│   ├── PivotTable.jsx          # Main pivot table component
│   ├── SalesTrendChart.jsx     # Line chart for trends
│   ├── RegionalChart.jsx       # Column chart for regions
│   ├── CategoryDonutChart.jsx  # Donut chart for categories
│   └── IncomeVsSalesScatter.jsx # Scatter plot analysis
├── data/
│   └── mockData.js             # Sample data generation
├── pages/
│   └── Dashboard.jsx           # Main dashboard layout
├── assets/                     # Images and static files
├── App.jsx                     # Root application component
└── main.jsx                    # Application entry point
```

## 🎨 Customization

### Adding New Charts
1. Create a new component in `src/components/`
2. Import Syncfusion chart components
3. Add to the dashboard grid in `Dashboard.jsx`

### Modifying Data
- Edit `src/data/mockData.js` to customize sample data
- Add new fields to `availableFields` array in `Dashboard.jsx`
- Update field types and captions as needed

### Styling
- Global styles: `src/App.css`
- Component styles: Inline styles in JSX (easily convertible to CSS modules)
- Syncfusion theme: Configured in `main.jsx`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Syncfusion](https://www.syncfusion.com/) for excellent data visualization components
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [@dnd-kit](https://dndkit.com/) for modern drag-and-drop functionality

---

**Built by [markon87](https://github.com/markon87)**

For questions or support, please open an issue on GitHub.
