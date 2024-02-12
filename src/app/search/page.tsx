import PostList from '@/components/posts/PostList';
import { fetchPostBySearchTerm } from '@/db/queries/posts';
import { redirect } from 'next/navigation';

interface SearchProps {
  searchParams: {
    term: string;
  };
}
export default async function Search({ searchParams }: SearchProps) {
  const { term } = searchParams;
  if (!term) {
    redirect('/');
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostBySearchTerm(term)} />
    </div>
  );
}
