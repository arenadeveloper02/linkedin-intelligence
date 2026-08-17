import { getHistory } from '@/lib/actions';
import HistoryClient from '@/components/HistoryClient';

export const dynamic = 'force-dynamic';

export default async function HistoryPage() {
  const items = await getHistory();
  return <HistoryClient items={items} />;
}
