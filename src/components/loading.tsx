type LoadingProps = {
  loading?: boolean;
};

const Loading = ({ loading = true }: LoadingProps) => {
  if (!loading) return null;
  return (
    <div className="w-full p-2 text-center text-slate-900 bg-slate-300 border border-slate-400 ">
      <span className="animate-pulse text-2xl">Loading…</span>
    </div>
  );
};

export default Loading;
