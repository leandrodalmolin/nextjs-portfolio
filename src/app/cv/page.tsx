import { redirect } from 'next/navigation'
import { getGlobals } from '@/api'

export default async function Cv() {
  const globals = await getGlobals()

  if (globals && globals.cvFile) {
    redirect(globals.cvFile.url)
  }

  redirect('/')
}
