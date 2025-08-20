import '@styles/scss/style.scss';
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: AppData.settings.siteName,
    description: AppData.settings.siteDescription,
    type: 'website',
    siteName: AppData.settings.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: AppData.settings.siteName,
    description: AppData.settings.siteDescription,
  },
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="en">
      <body>
        <div className="mil-wrapper">
          {children}

          <ScrollbarProgress />
        </div>
      </body>
    </html>
  );
};
export default Layouts;
