interface PrimaryBtnProps {
  children: React.ReactNode;
}

export default function PrimaryBtn({ children }: PrimaryBtnProps) {
  return <button className="primary_btn">{children}</button>;
}
