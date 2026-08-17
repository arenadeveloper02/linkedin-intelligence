export default function Loading() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-4">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#E2E3E5] border-t-[#2C2D33]" />
      <p className="mt-4 text-sm font-medium text-[#575A66]">Loading&hellip;</p>
    </main>
  );
}
