import Link from 'next/link';
import paths from '@/paths';
import Post from '@/components/posts/Post';
import CommentCreateForm from '@/components/comments/CommentCreateForm';
import CommentList from '@/components/comments/CommentList';
import { Suspense } from 'react';
import PostLoading from '@/components/posts/PostLoading';

interface PostShowProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShow({ params }: PostShowProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      <Suspense fallback={<PostLoading />}>
        <Post postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
