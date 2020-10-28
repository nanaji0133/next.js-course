import Link from "next/link";


const Index = () =>
{
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>
          notes
        </a>
      </Link>
    </div>
  );
};

export default Index;