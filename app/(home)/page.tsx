import { redirect } from 'next/navigation'

/**
 * Find a better way to redirect to dashboard
 */
export default function HomePage() {
  return redirect('/resources')
}
