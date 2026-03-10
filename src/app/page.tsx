import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ClearFlow AI — We Automate Accounting Firms',
  description: 'Custom AI automations built and installed into your accounting practice. Done for you, not DIY. Save 10–20 hours per week.',
};

export default function HomePage() {
  return <HomeClient />;
}
