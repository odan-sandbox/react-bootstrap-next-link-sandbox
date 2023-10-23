import Button from "react-bootstrap/Button";
import NavLink from "react-bootstrap/NavLink";
import Link from "next/link";

export default function Home() {
  const MyLink: React.ElementType = () => <div>link</div>;

  return (
    <div>
      {/* occurred type errors */}
      <Button variant="primary" as={Link}>
        Primary
      </Button>
      <Button variant="primary" as={MyLink}>
        Primary
      </Button>
      {/* not occurred type errors */}
      <NavLink as={Link}></NavLink>
      <NavLink as={MyLink}></NavLink>
    </div>
  );
}
