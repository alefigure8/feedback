import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import DashboardShell from '@/components/DashboardSell'
import fetcher from '@/utils/fetcher'


export default function Dashboard() {
  const auth = useAuth()
  const { data, error } = useSWR('/api/sites', fetcher)
  console.log(data)

  if(!data) {
    return <DashboardShell><SiteTableSkeleton /></DashboardShell>
  }

  return <DashboardShell><EmptyState /></DashboardShell>

}
