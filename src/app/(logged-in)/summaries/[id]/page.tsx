import { getSummaryById } from "@/components/summaries/summary";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const summary = await getSummaryById(id);

  return <div>SummaryPage {id}</div>;
}
