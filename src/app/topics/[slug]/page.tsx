import PostCreateForm from '@/components/posts/PostCreateForm';
import PostList from '@/components/posts/PostList';
import { fetchPostByTopicSlug } from '@/db/queries/posts';

interface TopicProps {
  params: {
    slug: string;
  };
}
export default function Topic({ params }: TopicProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
