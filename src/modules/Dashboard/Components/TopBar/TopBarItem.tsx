import type { TopBarItemProps } from "../../types/topbat";

export default function TopBarItem({
  icons,
  number,
  perc,
  title,
}: TopBarItemProps) {
  const Icon = icons;
  return (
    <li className="topbar_item">
      <div className="topbar_content">
        <h2 className="topbar_title">{title}</h2>
        <p className="topbar_number">
          {number}.ct <span>{perc}%</span>
        </p>
      </div>

      <div className="topbar_icon_bg">
        <Icon className="topbar_icon" />
      </div>
    </li>
  );
}
