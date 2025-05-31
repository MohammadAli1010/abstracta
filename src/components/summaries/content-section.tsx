function parsePoint(point: string) {
  const isNumbered = /^\d+\./.test(point);
  const isMainPoint = /^•/.test(point);
  //Replace the Unicode property escape with a simpler emoji detection
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;
  const hasEmoji = emojiRegex.test(point);
  const isEmpty = !point.trim();

  return { isNumbered, isMainPoint, hasEmoji, isEmpty };
}

export default function ContentSection({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div className="space-y-4">
      {points.map((point, index) => {
        const { isNumbered, isMainPoint, hasEmoji, isEmpty } =
          parsePoint(point);

        if (hasEmoji || isMainPoint) {
          return <p></p>;
        }
        return <p key={`poin-${index}`}>{point}</p>;
      })}
    </div>
  );
}
