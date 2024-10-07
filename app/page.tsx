import { redirect } from 'next/navigation'

// TODO: Find a better way to redirect to dashboard
export default function HomePage() {
  redirect('/resources')
}
