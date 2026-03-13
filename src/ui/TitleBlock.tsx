interface TitleBlockProps {
  title: string;
  desc: string;
}

export default function TitleBlock({ title, desc }: TitleBlockProps) {
  return (
    <article className="title_block">
      <h1>{title}</h1>
      <p>{desc}</p>
    </article>
  );
}
