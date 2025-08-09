export default function BannerInfo({
  head,
  text,
  odd = false,
}: {
  head: string;
  text: string;
  odd?: boolean;
}) {
  return (
    <div className={`p-6 my-4 rounded ${odd ? 'bg-gray-100' : 'bg-white'} shadow-sm border`}> 
      <div className="text-3xl md:text-4xl font-bold text-blue-900">{head}</div>
      <p className="mt-2 text-gray-700">{text}</p>
    </div>
  );
}
