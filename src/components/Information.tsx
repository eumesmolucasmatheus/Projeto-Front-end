export type InformationItem = { text: string; link: string };

type InformationProps = { title: string; informations: InformationItem[] };

export function Information({ title, informations }: InformationProps) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">{title}</h3>
      <ul className="space-y-3">
        {informations.map((info) => (
          <li key={info.text}>
            <a href={info.link} className="text-sm opacity-90 transition-opacity hover:opacity-100 hover:underline">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
