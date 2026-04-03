import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Emperor Workflows',
  description: 'Custom AI automations built and installed into your practice. Save 10–20 hours per week. Done for you, not DIY.',
};

export default function HomePage() {
  return <HomeClient />;
}
