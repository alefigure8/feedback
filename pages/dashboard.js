import useSWR from 'swr'
import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import DashboardShell from '@/components/DashboardSell'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/SiteTable'


export default function Dashboard() {
  const { data, mutate } = useSWR('/api/sites', fetcher)

  if(!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>)
}
